import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background border-t border-border py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          © {currentYear} ChaToken Insights. All rights reserved.
        </div>
        <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
