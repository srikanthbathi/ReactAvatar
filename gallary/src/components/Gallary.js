import React from 'react';
import AvatarEditor from 'react-avatar-editor';
import $ from 'jquery';

class Gallary extends React.Component {

    
    constructor(props){
        super(props);
        console.log(process.env.PUBLIC_URL);
        this.state={
           src:process.env.PUBLIC_URL+"/logo512.png",
           scale:1,
           prev:""
        }
        this.draggable = React.createRef();
        this.file = React.createRef();
    }
    positionChange = ()=>{
        const canvas = this.editor.getImage().toDataURL("image/jpg",1);
        fetch(canvas)
        .then(res=>res.blob())
        .then(blob=>{this.setState({prev:window.URL.createObjectURL(blob)})})
        this.setState({
            scale:this.state.scale + 0/* ,
            prev :this.editor.getImageScaledToCanvas().toDataURL("image/jpeg",0.3) */
        })
        console.log(this.editor);
    }
    componentDidMount(){
        $("document").ready(()=>{
        })
    }
    fileUpload = (e)=> {
       console.log(this.file.current.files)
       this.setState({
           src:this.file.current.files[0],
           scale:1.6
       });
    }
    scaleItem = (e) =>{
        var val = e.target.value;
        this.setState({
            scale:val*0.1
        })
    }

    maintainAspect =() => {
        console.log("pointer")
        this.draggable.current.style.height = this.draggable.current.style.width;
    }
    setEditorRef = (editor) => this.editor = editor
    render() {
        return (
            <div className="container pt-3" style={{backgroundColor:"whityer"}} >
                
                {/* <div onPointerMove={this.maintainAspect} ref = {this.draggable} id ="draggable" style={{width:"400px",height:"400px",backgroundColor:"white"
                ,opacity:0.6,borderColor:"black",resize:"horizontal",borderStyle:"dashed",overflow:"auto"}}></div> */}
                 <AvatarEditor image={this.state.src}
                    ref={this.setEditorRef}
                    width={330}
                    height={390}
                    border={20}
                    color={[255, 255, 255, 0.2]} // RGBA
                    scale={this.state.scale}
                    dragging={true}
                    rotate={0} onPositionChange={this.positionChange}>
                </AvatarEditor>
                
                <input type="range" id="points" name="points" min="-20" max="30" value="10" onChange={this.scaleItem}></input>
                
               

               <input type="file" onChange ={this.fileUpload} ref={this.file}  accept="image/png, image/jpeg"></input>

               <div>Preview</div>
                <img src ={this.state.prev} style={{width:"330px",height:"390px",backgroundColor:"white"}}></img>
                <img src ={this.state.prev}></img>


            </div>
        )
    }

}

export default Gallary;