import React from 'react';

class PixelManipulation extends React.Component{
     constructor(props){
         super(props);
         this.state={
            src : process.env.PUBLIC_URL + '/favicon.ico',
            imageWidth:0,
            imageHeight:0
         }
     }
     processImage = ()=> {
         var img = new Image();
         img.src = this.state.src;
         img.onload = ()=>{
            let canv = document.getElementsByTagName('canvas')[1];
            console.log(img.naturalHeight + " "+img.naturalWidth + " " + canv);
            this.setState({
                imageHeight:img.naturalHeight,
                imageWidth:img.naturalWidth
            })
            let ctx = canv.getContext('2d');
            console.log(img)
            ctx.drawImage(img,0,0,img.naturalHeight,img.naturalWidth);
            // var pixeldata = ctx.getImageData(0,0,192,192);
            // var aR = Math.sqrt(pixeldata.data.length);
            // var sI = aR*4 - 1;
            // var color = 255;
            // for(var i =0;i<aR;i++){
            //         for(var j =0;j<aR;j=j+4){
            //             var aIndex = (i*aR)+j;
            //             if(aIndex > sI) {
            //                 sI = aIndex*4 - 1;

            //                 color = (color+1)/2 -1;
            //                 console.log("color"+color+" "+aIndex);
            //             }
            //             pixeldata.data[aIndex] = color;
            //             pixeldata.data[aIndex+1] = color;
            //             pixeldata.data[aIndex+2] = color;
                        


            //         }
            //     }
            //     ctx.putImageData(pixeldata,0,0);
            var pixeldata = ctx.getImageData(0,0,img.naturalHeight,img.naturalWidth);
            var newPix = new Uint8ClampedArray(pixeldata.data.length * 4);
            
            var fR = Math.sqrt(newPix.length);
            var aR = Math.sqrt(pixeldata.data.length);
            console.log(aR+":ar");
            console.log(fR+":fr");
            console.log(pixeldata.data.length+":pixeldata");
            console.log(newPix.length+":newPix");
            for(var i =0;i<aR;i++){
                for(var j =0;j<aR;j++){
                    var aIndex = (i*aR)+j;
                    var fIndex = (i*fR) +j;
                    newPix[fIndex] = pixeldata.data[aIndex];
                    newPix[fIndex+1] = pixeldata.data[aIndex];
                    newPix[(fIndex+fR)] = pixeldata.data[aIndex];
                    newPix[(fIndex+fR)+1] = pixeldata.data[aIndex];
                }
            }
            let canv2x = document.getElementsByTagName('canvas')[2];
            var ImgData = new ImageData(newPix,img.naturalHeight*2,img.naturalWidth*2);
            canv2x.getContext('2d').putImageData(ImgData,0,0);
         }

     }
    render(){
        return(
      <div>
          <img src ={this.state.src}></img>
          <canvas width = {this.state.imageWidth } height={this.state.imageHeight}></canvas>
          <canvas width = {this.state.imageWidth*2 } height={this.state.imageHeight*2}></canvas>
          <button onClick={this.processImage}>process</button>
     </div>
        )
    }
}

export default PixelManipulation;