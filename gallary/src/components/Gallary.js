import React from 'react';
import AvatarEditor from 'react-avatar-editor'


class Gallary extends React.Component {

    
    constructor(props){
        super(props);
        this.state={
           src:process.env.PUBLIC_URL+"/logo512.png",
           scale:1.6,
           prev:""
        }
    }
    positionChange = ()=>{
        this.setState({
            scale:1.1,
            prev :this.editor.getImageScaledToCanvas().toDataURL()
        })
        console.log(this.editor.getCroppingRect())
    }
    setEditorRef = (editor) => this.editor = editor
    render() {
        return (
            <div className="container pt-3" style={{backgroundColor:"whityer"}} >
                 <AvatarEditor image={this.state.src}
                    ref={this.setEditorRef}
                    width={250}
                    height={250}
                    border={5}
                    color={[255, 255, 255, 0.6]} // RGBA
                    scale={this.state.scale}
                    rotate={45} onPositionChange={this.positionChange}>

                </AvatarEditor>
                <img src ={this.state.prev} style={{backgroundColor:"black"}}></img>

            </div>
        )
    }

}

export default Gallary;