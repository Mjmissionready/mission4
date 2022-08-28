def async_batch_annotate_images_uri(input_image_uri, output_uri):
    """Batch annotation of images on Google Cloud Storage asynchronously.

    Args:
    input_image_uri: The path to the image in Google Cloud Storage (gs://...)
    output_uri: The path to the output path in Google Cloud Storage (gs://...)
    """
    import re

    from google.cloud import storage

    from google.cloud import vision_v1p4beta1 as vision
    client = vision.ImageAnnotatorClient()

    # Construct the request for the image(s) to be annotated:
    image_source = vision.ImageSource(image_uri=input_image_uri)
    image = vision.Image(source=image_source)
    features = [
        vision.Feature(type_=vision.Feature.Type.LABEL_DETECTION),
        vision.Feature(type_=vision.Feature.Type.TEXT_DETECTION),
        vision.Feature(type_=vision.Feature.Type.IMAGE_PROPERTIES),
    ]
    requests = [
        vision.AnnotateImageRequest(image=image, features=features),
    ]

    gcs_destination = vision.GcsDestination(uri=output_uri)
    output_config = vision.OutputConfig(
        gcs_destination=gcs_destination, batch_size=2)

    operation = client.async_batch_annotate_images(
        requests=requests, output_config=output_config)

    print('Waiting for the operation to finish.')
    operation.result(timeout=10000)

    # Once the request has completed and the output has been
    # written to Google Cloud Storage, we can list all the output files.
    storage_client = storage.Client()

    match = re.match(r'gs://([^/]+)/(.+)', output_uri)
    bucket_name = match.group(1)
    prefix = match.group(2)

    bucket = storage_client.get_bucket(bucket_name)

    # Lists objects with the given prefix.
    blob_list = list(bucket.list_blobs(prefix=prefix))
    print('Output files:')
    for blob in blob_list:
        print(blob.name)

    # Processes the first output file from Google Cloud Storage.
    # Since we specified batch_size=2, the first response contains
    # annotations for the first two annotate image requests.
    output = blob_list[0]

    json_string = output.download_as_string()
    response = vision.BatchAnnotateImagesResponse.from_json(json_string)

    # Prints the actual response for the first annotate image request.
    print(u'The annotation response for the first request: {}'.format(
        response.responses[0]))