const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://jeopardygirl.files.wordpress.com/2007/04/happy-face-happyface-smiley-300x300.gif"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


for (let i = 0; i < posts.length; i++) {

    // Creazione primo post 
    const postList = document.querySelector('.posts-list');
    const post = document.createElement('div');
    post.classList.add('post')
    postList.appendChild(post);

    const postHeader = document.createElement('div');
    postHeader.classList.add('post__header');
    post.appendChild(postHeader);

    const postMeta = document.createElement('div');
    postMeta.classList.add('post-meta');
    postHeader.appendChild(postMeta);


    const postMetaIcon = document.createElement('div');
    postMetaIcon.classList.add('post-meta__icon');
    postMeta.appendChild(postMetaIcon);


    // Inseriamo i dati dell'autore
    const AuthorImg = document.createElement('img');
    AuthorImg.classList.add('profile-pic');
    postMetaIcon.appendChild(AuthorImg);

    AuthorImg.src = posts[i].author.image;
    AuthorImg.alt = posts[i].author.name;


    // Inseriamo i metadata nome profilo e data post
    const postMetaData = document.createElement('div');
    postMetaData.classList.add('post-meta__data');
    postMeta.appendChild(postMetaData);

    const postMetaAuthor = document.createElement('div');
    postMetaAuthor.classList.add('post-meta__author');
    postMetaData.appendChild(postMetaAuthor);

    postMetaAuthor.textContent = posts[i].author.name;

    const postMetaTime = document.createElement('div');
    postMetaTime.classList.add('post-meta__time');
    postMetaData.appendChild(postMetaTime);

    postMetaTime.textContent = posts[i].created;


    // Inseriamo il contenuto foto e testo del post
    const postText = document.createElement('div');
    postText.classList.add('post__text')
    post.appendChild(postText)

    postText.textContent = posts[i].content;

    const postImg = document.createElement('div');
    postImg.classList.add('post__image');
    post.appendChild(postImg);

    // Immagine Post
    const postPicture = document.createElement('img');
    postImg.appendChild(postPicture);
    postPicture.src = posts[i].media;


    // Inseriamo il footer dei post 
    const postFooter = document.createElement('div');
    postFooter.classList.add('post__footer');
    post.appendChild(postFooter);

    const postLikes = document.createElement('div');
    postLikes.classList.add('likes', 'js-likes');
    postFooter.appendChild(postLikes);

    const postLikesCta = document.createElement('div');
    postLikesCta.classList.add('likes__cta');
    postLikes.appendChild(postLikesCta);


    // Tasto Like

    const likeButton = `
    <a class="like-button  js-like-button" href="#" data-postid="1">
    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
    <span class="like-button__label">Mi Piace</span>
    </a>
    `

    postLikesCta.innerHTML = likeButton

   

    // Like Counter 
    const postLikesCounter = document.createElement('div');
    postLikesCounter.classList.add('likes__counter');
    postLikes.appendChild(postLikesCounter);

    let likesCounter = posts[i].likes


    postLikesCounter.innerHTML = `
    Piace a <b id="like-counter-1" class="js-likes-counter">${likesCounter}</b> persone`




   
    
    function liked(likeButton) {
        return likeButton.addEventListener('click', () => {
                likeButton.classList.toggle('like-button--liked');


               if (likeButton.classList.contains('like-button--liked')){
                postLikesCounter.innerHTML = `
                Piace a <b id="like-counter-1" class="js-likes-counter">${likesCounter++} </b> persone`

               }
               else {
                postLikesCounter.innerHTML = `
                Piace a <b id="like-counter-1" class="js-likes-counter">${likesCounter--} </b> persone`

               }
                
            });
        }

    

    liked(postLikesCta.querySelector('.js-like-button'));




}

