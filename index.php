<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $postContent = trim($_POST['post-content']);
    if ($postContent !== '') {
        // 投稿内容をファイルに保存
        file_put_contents('posts.txt', htmlspecialchars($postContent, ENT_QUOTES, 'UTF-8') . PHP_EOL, FILE_APPEND | LOCK_EX);
    }
    // メインページにリダイレクト
    header('Location: index.html');
    exit;
}
?>
