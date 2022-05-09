{
  /* <div class="omega--tn-icon">
   <span class="inactive_color"><i
           class="active_color fas fa-star"
           aria-hidden="true"></i></span>
   <span class="inactive_color"><i
           class="active_color fas fa-star"
           aria-hidden="true"></i></span>
   <span class="inactive_color"><i
           class="active_color fas fa-star"
           aria-hidden="true"></i></span>
   <span class="inactive_color"><i
           class="active_color fas fa-star"
           aria-hidden="true"></i></span>
   <span class="inactive_color"><i
           class="active_color fas fa-star"
           aria-hidden="true"></i></span>
</div>  */
}
const review = (msg, img, name, pos) => `

<div class="col-12">
    <div class="omega--tn-single style-nine">
        <div class="omega-tn-bottom-style-nine">
            <div class="omega--tn-top">
                <div class="omega--t-thumb">
                    <img loading="lazy" width="278"
                        height="300"
                        src="./images/${img}"
                        class="attachment-medium size-medium wp-post-image"
                        alt=""
                        sizes="(max-width: 278px) 100vw, 278px" />
                </div>
            </div>
            <div class="omega--tn-name-title">
                <h4 class="omega--tn-name">
                    ${name}</h4>
                <span class="omega--tn-title">
                    ${pos}</span>
            </div>
        </div>
        <div class="omega--tn-dis">
            <p>${msg}</p>
        </div>
        
    </div>
</div>
`;
const review_list = [
  {
    msg: `Manan and his team at Modernizing Processes are a true pleasure to work with. They understood the challenges my business faced, and collaborated with me on finding the right solutions. They continue to help push me and my business forward, and I couldn't recommend a better team for the job! Professional, friendly, and timely - what else could I ask for!`,
    img: "web pics 1.png",
    name: "Rechelle Balanzat",
    pos: "CEO/ Founder at JULIETTE",
  },
  {
    msg: `Manan is an amazing entrepreneur who helped me bring my mobile app concept to life after months of struggling to do so myself. He is one of the world's top leaders in no-code development despite being one of the youngest. He's an inspiration and I can't wait to see the amazing things he will surely accomplish over the next few decades and beyond! Much love.`,
    img: "web pics.png",
    name: "Matt Kohn",
    pos: "Brand designer at Different Hunger",
  },
  {
    msg: `Hi, my name is Ron and I've been dealing with Modernizing Processes, Manan and his team for about a year now. And they've been very helpful and diligent and creating the minimum viable product that I needed to help move my business forward. They were able to get a product together in a very short period of time that was very functional and helpful to me and my business. So I highly recommend them for any of your projects that you might be considering.`,
    img: "Ron Debaisse Jr.png",
    name: "Ron DeBiasse Jr",
    pos: "Managing Partner of Atlas Properties",
  },
  {
    msg: `Manan is an amazing Glide Expert who helped us bring our ideas into reality . While we started with the MVP, he and his team built us a fully Functional app that helped us do a product market fitment before investing heavily in native/hybrid apps. We did push the boundaries on what Glide can offer and with Manan ad the teams help this was possible. Exceptional turnaround and we were able to go to market in a matter of weeks. I would any day work with Manan and would recommend a no-code way for MVP or for anyone who is testing the idea and is not sure of the offering .<br>Top qualities- Passionate, Persistant,Honest.`,
    img: "web pics 2.png",
    name: "Rishu Srivastava",
    pos: "Founder and Chief Executive at Tllid",
  },
  {
    msg: `So we've been using Modernizing Processes app for the past one year. We use it in our kitchen at Lean Meal Co. So we have a meal plan, subscription business and we require an app that makes sure that all of the menus for each and every client is shown to our kitchen team so that they can create an app. And earlier, this was done manually. So it was extremely difficult for us to keep up with it. There were constantly small small errors, because we were doing it manually. But ever since, the Modernizing Processes app has come, and we started using it. We've seen a huge amount of time being safe. So, at least, you know, two hours in a day of mine is saved because I don't have to make those orders that go to the kitchen every single day. We've also reduced the amount of errors that are there. In terms of working with the team you know, they've completely understood exactly what issues we had, what issues we are facing. Our app has also evolved tremendously since it was implemented, the first app that was released is completely different than what we're using right now. It's got a lot more features. Now. It's not just used by my kitchen team. It's also used by my delivery team. It's also used by my admin team. So as time has gone ahead, we've started adding more and more features to it. And that's become extremely, extremely helpful for us. So if you are looking for an app, I highly recommend going with these guys because it's really been beneficial to my company. It's been a huge time saver and it’s really help reduce any of our issues that we had earlier.`,
    img: "gray imge.png",
    name: "Jay Krishnanunny",
    pos: "Co-Founder of Lean Meal Co",
  },
  {
    msg: `Hi Tanvir here CEO and I'm one of the founders Errunds and we're AI tech- based here in New York City, prior to meeting and working with Manan’s team, our team here at every, chink has been very traditional in our approach to development. We would work with our front-end or back-end developers data, scientists UI/UX designers and building and you know, while it was super rewarding being off the build-out often times, we feel that could be a little bit more and little bit more effective, and a little bit more quickly when it comes to shipping out. And that had us delve into the world of low code/No code. And through it, we came across Glide and we were able to utilize Glide to build out a couple of quick MVPs. The process itself was very intriguing and it had us wonder what else can we do with Glide? So through glad we came across Manan and his team were listed as Glide experts and it's been super awesome working with them. They are able to index on their backgrounds of Glide with all the numerous Glide apps they have built and giving us an understanding of all the different areas in which we can kind of utilize Glide to our advantage. Along with that  work with a host of other technology products, be it a CMS platforms or automation tools for payment gateways. So then the day we were able to come up with some really awesome ways to be able to build products that we previously thought were just not possible to get it wide. Seem super creative and the process itself is super rewarding and very fun. It's been really great working with this team so far, and yeah, no, we hope it can continue working with them and to build up more products for years to come. Thanks`,
    img: "gray image 1.png",
    name: "Tanvir",
    pos: "CEO MyErrunds",
  },
];
document.getElementById("reviews_list").innerHTML = review_list
  .map(({ msg, img, name, pos }) => review(msg, img, name, pos))
  .join("");

// let str = `
// <div class="col-xl-4 col-lg- col-md-6 col-sm-12">

//                                                                     <div class="omega--tn-single style-nine">

//                                                                         <!-- <div class="omega--tn-icon">
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                         </div> -->

//                                                                         <div class="omega--tn-dis">
//                                                                             <p>OMG! I cannot believe that I have got a
//                                                                                 brand
//                                                                                 new landing page after getting Omega. It
//                                                                                 was
//                                                                                 super easy to edit and publish.</p>
//                                                                         </div>

//                                                                         <div class="omega-tn-bottom-style-nine">
//                                                                             <div class="omega--tn-top">
//                                                                                 <div class="omega--t-thumb">
//                                                                                     <img loading="lazy" width="278"
//                                                                                         height="300"
//                                                                                         src="https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/image-278x300.png"
//                                                                                         class="attachment-medium size-medium wp-post-image"
//                                                                                         alt=""
//                                                                                         srcset="https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/image-278x300.png 278w, https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/image.png 306w"
//                                                                                         sizes="(max-width: 278px) 100vw, 278px" />
//                                                                                 </div>
//                                                                             </div>
//                                                                             <div class="omega--tn-name-title">
//                                                                                 <h4 class="omega--tn-name">
//                                                                                     Jonathan Taylor </h4>

//                                                                                 <span class="omega--tn-title">
//                                                                                     CEO at Creativex </span>
//                                                                             </div>
//                                                                         </div>

//                                                                     </div>
//                                                                 </div>
//                                                                 <div class="col-xl-4 col-lg- col-md-6 col-sm-12">

//                                                                     <div class="omega--tn-single style-nine">

//                                                                         <!-- <div class="omega--tn-icon">
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                         </div> -->

//                                                                         <div class="omega--tn-dis">
//                                                                             <p>OMG! I cannot believe that I have got a
//                                                                                 brand
//                                                                                 new landing page after getting Omega. It
//                                                                                 was
//                                                                                 super easy to edit and publish.</p>
//                                                                         </div>

//                                                                         <div class="omega-tn-bottom-style-nine">
//                                                                             <div class="omega--tn-top">
//                                                                                 <div class="omega--t-thumb">
//                                                                                     <img width="216" height="300"
//                                                                                         src="https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/testimonial-2-1-216x300.png"
//                                                                                         class="attachment-medium size-medium wp-post-image"
//                                                                                         alt="" loading="lazy"
//                                                                                         srcset="https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/testimonial-2-1-216x300.png 216w, https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/testimonial-2-1.png 306w"
//                                                                                         sizes="(max-width: 216px) 100vw, 216px" />
//                                                                                 </div>
//                                                                             </div>
//                                                                             <div class="omega--tn-name-title">
//                                                                                 <h4 class="omega--tn-name">
//                                                                                     Gavin Park </h4>

//                                                                                 <span class="omega--tn-title">
//                                                                                     CEO at Orbital </span>
//                                                                             </div>
//                                                                         </div>

//                                                                     </div>
//                                                                 </div>
//                                                                 <div class="col-xl-4 col-lg- col-md-6 col-sm-12">

//                                                                     <div class="omega--tn-single style-nine">

//                                                                         <!-- <div class="omega--tn-icon">
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                         </div> -->

//                                                                         <div class="omega--tn-dis">
//                                                                             <p>OMG! I cannot believe that I have got a
//                                                                                 brand
//                                                                                 new landing page after getting Omega. It
//                                                                                 was
//                                                                                 super easy to edit and publish.</p>
//                                                                         </div>

//                                                                         <div class="omega-tn-bottom-style-nine">
//                                                                             <div class="omega--tn-top">
//                                                                                 <div class="omega--t-thumb">
//                                                                                     <img width="255" height="300"
//                                                                                         src="https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/testimonial-1-1-255x300.png"
//                                                                                         class="attachment-medium size-medium wp-post-image"
//                                                                                         alt="" loading="lazy"
//                                                                                         srcset="https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/testimonial-1-1-255x300.png 255w, https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/testimonial-1-1.png 315w"
//                                                                                         sizes="(max-width: 255px) 100vw, 255px" />
//                                                                                 </div>
//                                                                             </div>
//                                                                             <div class="omega--tn-name-title">
//                                                                                 <h4 class="omega--tn-name">
//                                                                                     Betty Norton </h4>

//                                                                                 <span class="omega--tn-title">
//                                                                                     Freelance Designer </span>
//                                                                             </div>
//                                                                         </div>

//                                                                     </div>
//                                                                 </div>
//                                                                 <div class="col-xl-4 col-lg- col-md-6 col-sm-12">

//                                                                     <div class="omega--tn-single style-nine">

//                                                                         <!-- <div class="omega--tn-icon">
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                         </div> -->

//                                                                         <div class="omega--tn-dis">
//                                                                             <p>OMG! I cannot believe that I have got a
//                                                                                 brand
//                                                                                 new landing page after getting Omega. It
//                                                                                 was
//                                                                                 super easy to edit and publish.</p>
//                                                                         </div>

//                                                                         <div class="omega-tn-bottom-style-nine">
//                                                                             <div class="omega--tn-top">
//                                                                                 <div class="omega--t-thumb">
//                                                                                     <img width="240" height="300"
//                                                                                         src="https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/cheerful-businessman-eyeglasses-240x300.png"
//                                                                                         class="attachment-medium size-medium wp-post-image"
//                                                                                         alt="" loading="lazy"
//                                                                                         srcset="https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/cheerful-businessman-eyeglasses-240x300.png 240w, https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/cheerful-businessman-eyeglasses.png 306w"
//                                                                                         sizes="(max-width: 240px) 100vw, 240px" />
//                                                                                 </div>
//                                                                             </div>
//                                                                             <div class="omega--tn-name-title">
//                                                                                 <h4 class="omega--tn-name">
//                                                                                     Chase </h4>

//                                                                                 <span class="omega--tn-title">
//                                                                                     Web Developer </span>
//                                                                             </div>
//                                                                         </div>

//                                                                     </div>
//                                                                 </div>
//                                                                 <div class="col-xl-4 col-lg- col-md-6 col-sm-12">

//                                                                     <div class="omega--tn-single style-nine">

//                                                                         <!-- <div class="omega--tn-icon">
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                         </div> -->

//                                                                         <div class="omega--tn-dis">
//                                                                             <p>OMG! I cannot believe that I have got a
//                                                                                 brand
//                                                                                 new landing page after getting Omega. It
//                                                                                 was
//                                                                                 super easy to edit and publish.</p>
//                                                                         </div>

//                                                                         <div class="omega-tn-bottom-style-nine">
//                                                                             <div class="omega--tn-top">
//                                                                                 <div class="omega--t-thumb">
//                                                                                     <img width="278" height="300"
//                                                                                         src="https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/image-1-278x300.png"
//                                                                                         class="attachment-medium size-medium wp-post-image"
//                                                                                         alt="" loading="lazy"
//                                                                                         srcset="https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/image-1-278x300.png 278w, https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/image-1.png 306w"
//                                                                                         sizes="(max-width: 278px) 100vw, 278px" />
//                                                                                 </div>
//                                                                             </div>
//                                                                             <div class="omega--tn-name-title">
//                                                                                 <h4 class="omega--tn-name">
//                                                                                     Lizzie Rodgers </h4>

//                                                                                 <span class="omega--tn-title">
//                                                                                     Web Developer </span>
//                                                                             </div>
//                                                                         </div>

//                                                                     </div>
//                                                                 </div>
//                                                                 <div class="col-xl-4 col-lg- col-md-6 col-sm-12">

//                                                                     <div class="omega--tn-single style-nine">

//                                                                         <!-- <div class="omega--tn-icon">
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                         </div> -->

//                                                                         <div class="omega--tn-dis">
//                                                                             <p>OMG! I cannot believe that I have got a
//                                                                                 brand
//                                                                                 new landing page after getting Omega. It
//                                                                                 was
//                                                                                 super easy to edit and publish.</p>
//                                                                         </div>

//                                                                         <div class="omega-tn-bottom-style-nine">
//                                                                             <div class="omega--tn-top">
//                                                                                 <div class="omega--t-thumb">
//                                                                                     <img width="216" height="300"
//                                                                                         src="https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/testimonial-3-1-216x300.png"
//                                                                                         class="attachment-medium size-medium wp-post-image"
//                                                                                         alt="" loading="lazy"
//                                                                                         srcset="https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/testimonial-3-1-216x300.png 216w, https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/testimonial-3-1.png 306w"
//                                                                                         sizes="(max-width: 216px) 100vw, 216px" />
//                                                                                 </div>
//                                                                             </div>
//                                                                             <div class="omega--tn-name-title">
//                                                                                 <h4 class="omega--tn-name">
//                                                                                     Camden </h4>

//                                                                                 <span class="omega--tn-title">
//                                                                                     Web Developer </span>
//                                                                             </div>
//                                                                         </div>

//                                                                     </div>
//                                                                 </div>
//                                                                 <div class="col-xl-4 col-lg- col-md-6 col-sm-12">

//                                                                     <div class="omega--tn-single style-nine">

//                                                                         <!-- <div class="omega--tn-icon">
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                         </div> -->

//                                                                         <div class="omega--tn-dis">
//                                                                             <p>OMG! I cannot believe that I have got a
//                                                                                 brand
//                                                                                 new landing page after getting Omega. It
//                                                                                 was
//                                                                                 super easy to edit and publish.</p>
//                                                                         </div>

//                                                                         <div class="omega-tn-bottom-style-nine">
//                                                                             <div class="omega--tn-top">
//                                                                                 <div class="omega--t-thumb">
//                                                                                     <img width="278" height="300"
//                                                                                         src="https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/image-2-278x300.png"
//                                                                                         class="attachment-medium size-medium wp-post-image"
//                                                                                         alt="" loading="lazy"
//                                                                                         srcset="https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/image-2-278x300.png 278w, https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/image-2.png 306w"
//                                                                                         sizes="(max-width: 278px) 100vw, 278px" />
//                                                                                 </div>
//                                                                             </div>
//                                                                             <div class="omega--tn-name-title">
//                                                                                 <h4 class="omega--tn-name">
//                                                                                     Richard Bell </h4>

//                                                                                 <span class="omega--tn-title">
//                                                                                     Web Developer </span>
//                                                                             </div>
//                                                                         </div>

//                                                                     </div>
//                                                                 </div>
//                                                                 <div class="col-xl-4 col-lg- col-md-6 col-sm-12">

//                                                                     <div class="omega--tn-single style-nine">

//                                                                         <!-- <div class="omega--tn-icon">
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="active_color fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                             <span class="inactive_color"><i
//                                                                                     class="fas fa-star"
//                                                                                     aria-hidden="true"></i></span>
//                                                                         </div> -->

//                                                                         <div class="omega--tn-dis">
//                                                                             <p>OMG! I cannot believe that I have got a
//                                                                                 brand
//                                                                                 new landing page after getting Omega. It
//                                                                                 was
//                                                                                 super easy to edit and publish.</p>
//                                                                         </div>

//                                                                         <div class="omega-tn-bottom-style-nine">
//                                                                             <div class="omega--tn-top">
//                                                                                 <div class="omega--t-thumb">
//                                                                                     <img width="240" height="300"
//                                                                                         src="https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/cheerful-businessman-eyeglasses-office-240x300.png"
//                                                                                         class="attachment-medium size-medium wp-post-image"
//                                                                                         alt="" loading="lazy"
//                                                                                         srcset="https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/cheerful-businessman-eyeglasses-office-240x300.png 240w, https://finestdevs.com/demos/wp/omex/wp-content/uploads/2021/08/cheerful-businessman-eyeglasses-office.png 306w"
//                                                                                         sizes="(max-width: 240px) 100vw, 240px" />
//                                                                                 </div>
//                                                                             </div>
//                                                                             <div class="omega--tn-name-title">
//                                                                                 <h4 class="omega--tn-name">
//                                                                                     Joseph Mathis </h4>

//                                                                                 <span class="omega--tn-title">
//                                                                                     Web Developer </span>
//                                                                             </div>
//                                                                         </div>

//                                                                     </div>
//                                                                 </div>
// `;
