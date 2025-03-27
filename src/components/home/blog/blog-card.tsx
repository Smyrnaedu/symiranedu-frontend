import React from "react";
import { Card } from "react-bootstrap";
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
  blogDate: string; // "12.12.2025" formatında
}

const BlogCard: React.FC<Props> = ({ blog }: Props) => {
  // Tarih formatını dönüştürme fonksiyonu
  const formatDate = (dateString: string) => {
    const [day, month, year] = dateString.split(".");
    const date = new Date(`${year}-${month}-${day}`);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

  // Açıklamayı kısaltma fonksiyonu
  const truncateDescription = (text: string, length: number) => {
    return text.length > length ? text.substring(0, length) + "[...]" : text;
  };

  return (
    <Link className="blog-card" href="/blog">
      <Image
        src={`/image/${blog.image}`}
        alt={blog.blogTextTitle}
        width={400}
        height={300}
      />
      <Card.Body>
        <span className="badge bg-secondary">{formatDate(blog.blogDate)}</span> 
        <Card.Title>{blog.blogTextTitle}</Card.Title>
        <Card.Text>{truncateDescription(blog.blogText, 20)}</Card.Text> 
      </Card.Body>
    </Link>
  );
};

export default BlogCard;