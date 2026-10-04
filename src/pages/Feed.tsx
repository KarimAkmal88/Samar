import { Button, Card, Skeleton, Spinner } from "@heroui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import CreatePost from "../components/posts/CreatePost";
import Post from "../components/posts/Post";
import type { PostI } from "../interfaces/postI";
import { postsServices } from "../services/postsService";


export default function Feed() {

  const [posts, setPosts] = useState<PostI[]>([]);
  const [errMsg, setErrMsg] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllPosts();
  }, []);

  async function getAllPosts(): Promise<void> {
    setErrMsg('');
    setIsLoading(true);
    try {
      const { data } = await postsServices.getAllPosts();
      setPosts(data.posts);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrMsg(error.response?.data.message);
        if (!error.response?.data.message) {
          setErrMsg('Network error');
        }
      } else {
        setErrMsg('Unexpected error');
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && posts.length === 0 ? (
        <Card className="max-w-3xl space-y-5 p-4 mx-auto" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300" />
          </Skeleton>

          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200" />
            </Skeleton>

            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200" />
            </Skeleton>

            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300" />
            </Skeleton>
          </div>
        </Card>
      ) :
        errMsg && posts.length === 0 ? (
          <div className="bg-elevated text-text-primary">
            <p className="text-2xl">{errMsg}</p>
            <Button color="secondary" onClick={getAllPosts}>Retry</Button>
          </div>
        ) : (
          <>
            {isLoading && posts.length > 0 && <Spinner />}

            {errMsg && posts.length > 0 &&
              <div className="bg-elevated text-text-primary">
                <p className="text-2xl">{errMsg}</p>
                <Button color="secondary" onClick={getAllPosts}>Retry</Button>
              </div>
            }

            <div className="max-w-3xl my-10 mx-auto">
              <div className="grid gap-4 rounded-2xl bg-elevated border border-text-secondary text-text-primary">
                <CreatePost getAllPosts={getAllPosts} />

                {posts.map((post) => (
                  <Post key={post._id} post={post} />
                ))}
              </div>
            </div>
          </>
        )}
    </>
  );
}
