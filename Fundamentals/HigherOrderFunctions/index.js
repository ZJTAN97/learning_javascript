// A higher order function is a function that does at least one of the following
// 1. Takes one or more function as an argument (parameter)
// 2. Returns a function as the result

const posts = [
    {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'},
    {userId: 1, id: 2, title: 'qui est esse', body: 'est rerum tempore vitae\nsequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla'},
    {userId: 1, id: 3, title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut', body: 'et iusto sed quo iure\nvoluptatem occaecati omnis e…\nmolestiae porro eius odio et labore et velit aut'},
    {userId: 1, id: 4, title: 'eum et est occaecati', body: 'ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit'},
    {userId: 1, id: 5, title: 'nesciunt quas odio', body: 'repudiandae veniam quaerat sunt sed\nalias aut fugi…sse voluptatibus quis\nest aut tenetur dolor neque'},
    {userId: 1, id: 6, title: 'dolorem eum magni eos aperiam quia', body: 'ut aspernatur corporis harum nihil quis provident …s\nvoluptate dolores velit et doloremque molestiae'},
    {userId: 1, id: 7, title: 'magnam facilis autem', body: 'dolore placeat quibusdam ea quo vitae\nmagni quis e…t excepturi ut quia\nsunt ut sequi eos ea sed quas'},
    {userId: 1, id: 8, title: 'dolorem dolore est ipsam', body: 'dignissimos aperiam dolorem qui eum\nfacilis quibus…\nipsam ut commodi dolor voluptatum modi aut vitae'},
    {userId: 1, id: 9, title: 'nesciunt iure omnis dolorem tempora et accusantium', body: 'consectetur animi nesciunt iure dolore\nenim quia a…st aut quod aut provident voluptas autem voluptas'},
    {userId: 1, id: 10, title: 'optio molestias id quia eum', body: 'quo et expedita modi cum officia vel magni\ndolorib…it\nquos veniam quod sed accusamus veritatis error'},
    {userId: 2, id: 11, title: 'et ea vero quia laudantium autem', body: 'delectus reiciendis molestiae occaecati non minima…luptates ut commodi qui incidunt\nut animi commodi'},
    {userId: 2, id: 12, title: 'in quibusdam tempore odit est dolorem', body: 'itaque id aut magnam\npraesentium quia et ea odit e…uia id voluptatem\nincidunt ea est distinctio odio'}
]

// forEach()
posts.forEach(post => {
    console.log(post);
})


// filter() helps select specific data
const filteredPosts = posts.filter(post => {
    return post.userId === 1;
})
console.log(filteredPosts);


// map() transforms the data
const mappedPosts = filteredPosts.map(post => {
    return post.id* 10;
})


// reduce() computes a single value from data