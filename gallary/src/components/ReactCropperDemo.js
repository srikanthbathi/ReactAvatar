import React from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';


class ReactCropperDemo extends React.Component{
    constructor(props){
        super(props);
        this.cropImg = new React.createRef();
        this.canvas = new React.createRef();
        this.img = new React.createRef();
        this.state =
        {
            src:process.env.PUBLIC_URL+"/test.png",
            prev:""
        }
    }
    cropItem(crop){
        const dataUrl = "";
                console.log(this.cropImg.cropper.getImageData())
                console.log(this.cropImg.cropper.getCropBoxData().left)
                console.log(this.cropImg.cropper.getData())
                console.log(this.canvas);
                var img = new Image();
                 img.src = this.state.src;
                 img.onload = ()=>{
                     console.log("loaded")
                     
                    var ctx = this.canvas.current.getContext('2d');
                    ctx.clearRect(0,0,250,290)
                    console.log(ctx)
                    ctx.drawImage(img,this.cropImg.cropper.getData().x,this.cropImg.cropper.getData().y,974,1278,0,0,250,290);
                 }
                

        this.setState({
            prev:dataUrl
        })
    }
    render(){
        return(<div>
            <Cropper src={this.state.src}
            ref={cropper => { this.cropImg = cropper; }}
            aspectRatio={21/25}
            crop = {this.cropItem.bind(this)}
            style={{height: 400, width: '50%'}}
            rotateTo={45}
            rotatable={true}
            responsive={true}
            guides={true}
            autoCrop={true}
            background={false}
            >

            </Cropper>
            <canvas id = "prev" ref ={this.canvas} width="250" height="290"></canvas>
            <img ref = {this.img} src = {this.state.src}></img>
            </div>
        )
    }
}

export default ReactCropperDemo;