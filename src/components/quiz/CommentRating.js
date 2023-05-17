import style from '../quiz/CommentRating.module.css'

function CommentRatting() {
  return (
    <div className={style.container}>
      <div>
        <p ><img className={style.imageAdjust} src="https://seekify-public.s3.ap-south-1.amazonaws.com/resources/1674128731438-comments.png" alt="comments" />Leave a Comment </p>
        <p >
          <img className={style.imageAdjust} src="https://seekify-public.s3.ap-south-1.amazonaws.com/resources/1674036291473-Vector.png" alt="save" /><span >Save Quiz</span>
        </p>
        <p ><img className={style.imageAdjust} src="https://seekify-public.s3.ap-south-1.amazonaws.com/resources/1674128368974-challengeafriend.png" alt="challenge" />Invite Friends</p>

      </div>
      <div>

        <div className={style.rating}>

          <img className={`${style.ratingImage} ${style.firstImage}`} src="https://seekify-public.s3.ap-south-1.amazonaws.com/2383972e8d103b35ca3f93a60c5f22f3af57d904/1672320014891/Gaurav%20verma-sm.jpg" alt="user" />

          <img className={`${style.ratingImage} ${style.secondImage}`} src="https://seekify-public.s3.ap-south-1.amazonaws.com/seekify-content-Fri%2520Feb%252010%25202023%252013%253A14%253A41%2520GMT%252B0530%2520%28India%2520Standard%2520Time%29-IMG20230121124346-sm.jpg" alt="user" />

          <img className={`${style.ratingImage} ${style.thirdImage}`} src="https://seekify-public.s3.ap-south-1.amazonaws.com/seekify-content-Fri%2520Feb%252010%25202023%252017%253A36%253A03%2520GMT%252B0530%2520%28India%2520Standard%2520Time%29-WhatsApp%20Image%202023-02-10%20at%205.20.59%20PM-sm.jpeg" alt="user" />

          <img className={`${style.ratingImage} ${style.fourthImage}`} src="https://seekify-public.s3.ap-south-1.amazonaws.com/seekify-content-Tue%2520Mar%252014%25202023%252020%253A49%253A49%2520GMT%252B0530%2520%28India%2520Standard%2520Time%29-Screenshot_20220330-232505_Pinterest-sm.jpg" alt="user" />
          <img className={`${style.ratingImage} ${style.fifthImage}`} src="https://seekify-public.s3.ap-south-1.amazonaws.com/seekify-content-Fri%2520Feb%252010%25202023%252017%253A36%253A03%2520GMT%252B0530%2520%28India%2520Standard%2520Time%29-WhatsApp%20Image%202023-02-10%20at%205.20.59%20PM-sm.jpeg" alt="user" />

          <span className={style.countRating}>
            <p className={style.titleText}>+98</p>
          </span>
          <p className={style.enrolled}>are enrolled</p>
         
        </div>

      </div>

    </div>





  );
}

export default CommentRatting;