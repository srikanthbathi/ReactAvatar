import React from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';


class ReactCropperDemo extends React.Component{
    constructor(props){
        super(props);
        this.cropImg = new React.createRef();
        this.state =
        {
            src:process.env.PUBLIC_URL+"/test.png",
            prev:""
        }
    }
    cropItem(){
        const dataUrl = "";
        console.log(this.cropImg.current.cropper)
        console.log(dataUrl);
        this.setState({
            prev:dataUrl
        })
    }
    render(){
        return(<div>
            <Cropper src={this.state.src}
            ref={this.cropImg}
            aspectRatio={21/25}
            crop = {this.cropItem.bind(this)}
            style={{height: 400, width: '50%'}}
            rotateTo={45}
            rotatable={true}
            responsive={true}
            guides={false}
            
            >

            </Cropper>

            <img src = {this.state.prev}></img>
            </div>
        )
    }
}

export default ReactCropperDemo;