import styles from '@/styles/Blog/blogPost.module.scss'

interface BlogPostProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

export default function BlogPost({ title, description, image, category
}: BlogPostProps) {
  return (
    <div className={styles['blog-post']}>
      <img 
        src={image} 
        alt={title} 
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}