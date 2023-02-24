let cardInfo = {
    title: 'City Lights in New York',
    date: new Date('2017-01-26'),
    comments: 67,
    subTitle: 'The city that never sleeps.',
    description:
        'New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.',
    category: 'photos',
    imageURL:
        'https://images.unsplash.com/photo-1610874933184-7728fd666162?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    };
    module.export = { cardInfo };

    let ui = <div class="container">
 
        <div class="thumbnail">
            <div class="date">
                <div class="day">27</div>
                <div class="month">mar</div>
            </div>

            <img 
                src="'https://images.unsplash.com/photo-1610874933184-7728fd666162?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'" alt=""/>
        </div>

        <div class="post-content">
            <div class="category">photos</div>
            <h1 class="title">City Lights in New York</h1>
            <h2 class="sub-title">The city that never sleeps.</h2>
            <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis error amet in officia alias ex doloribus quaerat sunt, repellendus vel eos mollitia reprehenderit sint obcaecati similique ullam sequi expedita cum.</p>

            <div class="post-meta">
                <span>
                    <i class="fa fa-comments"></i>
                    <a href="#">39 comments</a>
                </span>

            </div>

        </div>

    </div>

</div>