import styled from 'styled-components';
import './Upload.css';
import Input from '../cExtra/Input';

const Container = styled.div`
    background-color: var(--body-bg);
    color: var(--txt-color);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100vh;
    `;

function Upload() {
    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <Container>
            <div className="box">
                <h2 className="header">
                    Upload Your Image
                </h2>
                <Input
                    onFileChange={(files) => onFileChange(files)}
                    name="imgfile" accept="image/jpg" id="imgfile"
                />
                <button id="submitBtn" >Submit</button>
                <div className='' id="images"></div>
                <script src="./submit.js"></script>
            </div>
        </Container>
    );
}

export default Upload;