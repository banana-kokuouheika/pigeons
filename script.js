// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('new-post-form');
    const postContent = document.getElementById('post-content');
    const postList = document.getElementById('post-list');

    postForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const content = postContent.value.trim();
        if (content === '') {
            alert('投稿内容を入力してください');
            return;
        }

        // 新しい投稿を作成
        const newPost = document.createElement('div');
        newPost.className = 'post';
        newPost.textContent = content;
        
        // 投稿リストに追加
        postList.prepend(newPost);
        
        // フォームをクリア
        postContent.value = '';
    });
});
