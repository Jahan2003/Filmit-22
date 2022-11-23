import React from "react";
import Navbar from "../components/nav"
const Shaw=()=>{
    return (
      <>
      <Navbar/>
      <div class="ma">
  <div class="bc">
  <h2 class="head-title">The Shawshank Redemption(1994)</h2>
  <span id="cer">R-rated</span>
   </div>
  
   <video width="900" height="450" controls autoplay muted>
      <source src="../website/Black Adam – Official Trailer 1.mp4" type="video/mp4"></source>
    </video> 
    <div class="syno">
      <div class="syn">
          <div class="head">
              Synopsis:
          </div>
          <div class="con">
          Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit.<br/> The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.
          </div>
      </div>
  
      <div class="headn">
          <div class="tit">Top Cast</div>
          <div class="wrap">
              <div class="im">
                  <img src="dwn.jfif" alt="" ></img>
                  <h4>Tim Robbins</h4>
            </div>
            <div class="im">
              <img src="superman.jfif" alt="" ></img>
              <h4>Morgan Freeman</h4>
        </div>
        <div class="im">
          <img src="noah.jfif" alt="" ></img>
          <h4>Bob Gunton</h4>
      </div>
      <div class="im">
        <img src="sara.jfif" alt="" ></img>
        <h4>William Sadler</h4>
    </div>
    </div>
   <div class="rev">
      <div class="sec"></div>
      <div class="top">
          Reviews:
      </div>
      <div class="to" id="to">
          <div class="h">
          This is How Movies Should Be Made  ⭐9
          </div>
              <div class="cont">
              One of the finest films made in recent years. It's a poignant story about hope. Hope gets me. That's what makes a film like this more than a movie. It tells a lesson about life. Those are the films people talk about 50 or even 100 years from you. It's also a story for freedom. Freedom from isolation, from rule, from bigotry and hate. Freeman and Robbins are majestic in their performances. Each learns from the other. Their relationship is strong and you feel that from the first moment they make contact with one another. There is also a wonderful performance from legend James Whitmore as Brooks.  
                 </div>
              
          
          <div class="h">
          never give up hope  ⭐10
  
          </div>
              <div class="cont">
              Two imprisoned men (Tim Robbins and Morgan Freeman) bond over a number of years, finding solace and eventual redemption through acts of common decency.Is this the greatest film of all time? FILMIT would have you believe so. Despite being a box office flop (that barely recouped its budget), the film received multiple award nominations and outstanding reviews from critics for its acting, story, and realism. It has since been successful on cable television, VHS, DVD, and Blu-ray.
And it deserves this praise that seems to be growing each year. Now twenty years old, the film has not aged a day, and instead seems to be getting better. This is Tim Robbins' best role, and a fine performance from the always wonderful Morgan Freeman.
              </div>
              
          
         
          
      </div>
      
      
      <div class="headi">
          <div class="h">
              Your Review:
          </div>
              <div id="headline">
                  <textarea id="text1" placeholder="Write a headline of your review" rows="1" required></textarea>
              </div>
              <div id="conte">
                  <textarea id="text2" placeholder="Write your review (Minimum 100 characters)" rows="5" required minlength="1"></textarea>
              
          </div>
          
      </div>
          <center>
  
              <button onclick="review()">Submit</button>
          </center>
          </div>
      
      
        </div>
          
    </div>
  </div>
  
  
  </>
    )
}
export  default Shaw