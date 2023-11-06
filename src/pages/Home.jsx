import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold ">
                <p className="bg-purple-300 border-b-4 border-t-4 border-black inline-block p-3">Login to read posts</p>
                <br/>
                <br/>
                <p className="bg-orange-100 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex harum aperiam porro ducimus. Alias amet minus cumque! Esse quaerat praesentium quia, voluptates illo laudantium accusantium ut amet, quasi consequatur placeat ex excepturi quis quibusdam hic cum, aperiam quisquam? Optio quae eaque tempore exercitationem nemo voluptatem tempora reiciendis vitae numquam fuga ipsa laborum sed eum, deleniti consequatur facilis eveniet possimus velit voluptatibus aliquam animi. Maiores ex dolorum, placeat sed dicta officia veniam, facilis nulla accusamus minus ipsam. Consequatur eos aspernatur explicabo officiis laborum iure est dolorem esse numquam aliquid consequuntur nulla aut quod exercitationem iusto, ex corrupti. Repellat minus dicta quam dolorum. Soluta vel minus aliquam quisquam sint accusantium repellat dolores reiciendis tempore? Voluptates cupiditate itaque deleniti enim soluta! Amet autem esse iste, repudiandae eum vero.</p>
                <br/>
                <p className="bg-yellow-100">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate numquam voluptatem inventore magni ab voluptatum ut atque, deleniti quia fuga provident laboriosam, maxime expedita iusto. Asperiores, unde? Nesciunt atque suscipit numquam est iste explicabo sapiente id commodi autem. Consequatur dolor quam debitis facilis excepturi, facere eveniet quibusdam quas pariatur, dolores nihil ab voluptatum delectus nisi quod distinctio explicabo beatae aspernatur? Modi perferendis doloremque minus accusamus laborum unde alias nobis, incidunt reprehenderit sequi id ducimus ipsam inventore nemo voluptas molestiae ad fugiat voluptates sint harum laboriosam quod tenetur! Officia veritatis est necessitatibus saepe odit magni, itaque debitis aliquid doloremque nihil labore. Placeat eum at nesciunt voluptatem voluptates voluptate maiores ipsam suscipit distinctio quos, impedit accusantium quidem modi rerum ducimus ea quae consequuntur eaque saepe? Magni, aperiam! Molestias reiciendis sint repudiandae cumque nobis, cum vero ullam, saepe tempore ex consectetur numquam fuga. Suscipit, illum molestiae iusto autem asperiores, laudantium culpa ipsum placeat ut assumenda unde in ad necessitatibus incidunt. Officiis provident molestiae obcaecati fugit in quasi deserunt sint, inventore fuga. Ducimus quo corrupti ad alias dolorum repudiandae esse odit quasi porro. Deleniti nihil aliquid incidunt voluptatum vero adipisci asperiores facere optio, inventore libero tempora aut voluptates unde pariatur cum porro nulla dicta.</p>
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
