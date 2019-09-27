
router.post("/post", (req, res) => {
   
        const blog = new Blog();
        blog.name = req.body.name;
        blog.topic = req.body.topic;
        blog.title = req.body.title;
        blog.article = req.body.article;
        blog.save()
          .then((result) => {
            User.findOne({ name: blog.name }, (err, user) => {
                if (user) {
                    // The below two line will add the newly saved blog's 
                    // ObjectID to the the User's blogs array field
                    user.blogs.push(blog);
                    user.save();
                    res.json({ message: 'blog created!' });
                }
            });
          })
          .catch((error) => {
            res.status(500).json({ error });
          });
    });