import React from 'react';
import "./Feed.css"
import Post from './Post';
import TweetBox from './TweetBox';
// import db from './firebase'

function Feed() {
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     db.collection('posts').onSnapshot(snapshot => {
    //         setPosts(snapshot.docs.map(doc => doc.data()))
    //     })
    // }, [])

    return ( 
        <div className='feed'>
            <div className='feed__header'>
                <h2>Home</h2>
            </div>
            <TweetBox />
            {/* {posts.map(post => (
                <Post 
                displayName={post.displayName}
                userName={post.userName}
                verified={post.verified}
                text={post.text}
                image={post.image}
                avatar={post.avatar} />
            ))} */}
            

            <Post 
            displayName='Aid Fawzal'
            userName='AidFawzal'
            verified={true}
            text='Zaman sekarang banyak kes santau. I risau tengok wanita pos gambar full body kat media social.'
            image=''
            avatar='' />

            <Post 
            displayName='Att Yusof'
            userName='attyusof'
            verified={true}
            text='Update: my left eye sakit gilaaaa after tu sbb kena tepat hahaha. Put eyemo dy so it’s a lot better, no more redness but still watery lol'
            image='https://www.w3schools.com/html/pic_trulli.jpg'
            avatar='' />

            <Post 
            displayName='Ked'
            userName='skz_ked'
            verified={false}
            text='My best friend is looking for someone who is ready to settle down maybe by the end of this year. Even so it’s still okay to proceed next year. Anyone interested just can hmu for more info. Thank you @TwtJodohMY!'
            image=''
            avatar='' />

            <Post 
            displayName='Rin'
            userName='rin_2045'
            verified={false}
            text='Masa belajar uni dulu selalu dapat:
            "Belajar kat mana?"
            "Saya belajar kat Korea."
            "Mahal tu, parent hantar?"
            "Tak, scholarship."
            "Untung u people, tak banyak A pun boleh dapat scholarship"
            Senyum je. Dalam hati: "auntie belum tanya result SPM saya terus cakap gitu kenapa 😭"'
            image=''
            avatar='https://twitter.com/rinmansor/photo' />
        </div>
     );
}

export default Feed;