import React from "react";
import { Card, CardBody, CardFooter, CardText } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

interface Props {
  blog: BlogType;
}

interface BlogType {
    id: number;
    blogTextTitle: string;
    image?: string;
    blogText: string;
    blogDate: string;
  }

const BlogCard: React.FC<Props> = ({
  blog,
}: Props) => {


  return (
    <Link className="blog-card" href="/blog">
      <Image src={`/image/${blog.image}`} alt={blog.blogTextTitle} width={250} height={200}/>
      <Card.Body>
        <Card.Title>{blog.blogTextTitle}</Card.Title>
        <Card.Text>
          {blog.blogText}
        </Card.Text>
      </Card.Body>
    </Link>

  );
};

export default BlogCard;
