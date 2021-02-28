import React from 'react';
import '../App.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = (props) => (
  <AudioPlayer
    //autoPlay
    src={props.src}
    header={props.header}
    footer={props.footer}
    onPlay={e => console.log("onPlay")}
    // other props here
  />
);

function Media() {
  return (
    
    <React.Fragment>
      <div>
        <img className="banner-img" src="../img/work-samples.png" alt="media banner"></img>
      </div>
      <div className="flex-div justify-content-center">
        <div className="col-md-5 flex-child">
          <Player src={"../music/Renaissance_Man_Music_Reel_2020.mp3"} header={"Renaissance Man Music Demo Reel"} />
        </div>
        <div className="col-md-5 flex-child">
          <Player  src={"../music/90s_mix_4_full_final.wav"} header={"HULU Craig Robinson BHM"}/>
        </div>
      </div>
      <div className="flex-div justify-content-center">
        <div className="col-md-5 flex-child ">
          <Player src={"../music/finance_demo_8(2).mp3"} header={"Finance Podcast"}/>
        </div>
        <div className="col-md-5 flex-child">
          <Player  src={"../music/lauras_funeral_theme_2.wav"} header={"Laura's Funeral Theme"}/>
        </div>
      </div>
      <div className="flex-div justify-content-center">
        <div className="col-md-5 flex-child ">
          <Player src={"../music/mixdown.mp3"} header={"Modern Contemplative"}/>
        </div>
        <div className="col-md-5 flex-child">
          <Player  src={"../music/Push_It_To_D_Limit.wav"} header={"IEX Push It To D Limit"}/>
        </div>
      </div>
      <div className="flex-div justify-content-center">
        <div className="col-md-5 flex-child ">
          <Player src={"../music/retirement_tools_demo_emu.mp3"} header={"Strings/Piano Theme"}/>
        </div>
        <div className="col-md-5 flex-child">
          <Player  src={"../music/zissou_vibe_revised_w_vo.mp3"} header={"JP Morgan Demo"}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Media;