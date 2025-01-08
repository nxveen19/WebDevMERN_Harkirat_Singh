async function getMultipleData(userId) {
    console.log('1. Starting parallel operations');

    try {
        const [userData, postsData, commentsData] = await Promise.all([
            fetch(`/users/${userId}`).then(r => r.json()),
            fetch(`/posts/${userId}`).then(r => r.json()),
            fetch(`/comments/${userId}`).then(r => r.json())
        ]);

        console.log('2. All parallel operations completed');
        console.log('3. User data:', userData);
        console.log('4. Posts data:', postsData);
        console.log('5. Comments data:', commentsData);

        return { userData, postsData, commentsData };
    } catch (error) {
        console.log('❌ Error in parallel operations:', error);
        throw error;
    }
}
getMultipleData()