import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

const navLinks = [
  { label: "Audio", path: "/audioplp" },
  { label: "Gaming", path: "/gamingplp" },
  { label: "Wearable", path: "/wearableplp" },
  { label: "Photography", path: "/photographyplp" },
  {label: <CartIcon/>, path:"/cartpage"}
];

const NavLink = ({ label }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative px-3 py-1.5 rounded-full cursor-pointer"
      style={{ textDecoration: "none" }}
    >
      <motion.span
        animate={{
          backgroundColor: hovered ? "rgba(0,0,0,0.06)" : "rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute inset-0 rounded-full"
      />
      <motion.span
        animate={{ color: hovered ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.7)" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative z-10 text-sm font-medium"
      >
        {label}
      </motion.span>
    </div>
  );
};



export default function MotionNavbar() {
  // Initialize synchronously — avoids jerk on refresh when page is already scrolled
  const [scrolled, setScrolled] = useState(() =>
    typeof window !== "undefined" ? window.scrollY > 20 : false
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  // mounted flag: suppress all transitions on first render so no animation plays on refresh
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay before enabling transitions so initial paint is instant
    const timer = setTimeout(() => setMounted(true), 50);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transition = mounted
    ? { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
    : { duration: 0 };

  return (
    <div className="w-full fixed top-2 inset-x-0 z-50 sticky">
      {/* Desktop Navbar */}
      <motion.div
        initial={false}
        animate={{
          width: scrolled ? "50%" : "80%",
          backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.5)",
          backdropFilter: scrolled ? "blur(10px)" : "blur(5px)",
          boxShadow: scrolled
            ? "rgba(0,0,0,0.1) 0px 10px 30px -10px"
            : "rgba(0,0,0,0) 0px 0px 0px 0px",
          y: scrolled ? 4 : 0,
        }}
        transition={transition}
        className="hidden lg:flex flex-row self-center items-center justify-between py-3 mx-auto px-8 rounded-full relative z-[100]"
      >
        <Link to={'/'}>
        <Logo />
         </Link>
        {/* Nav Links — layout prop smoothly animates reflow when buttons appear/disappear */}
        <motion.div
          layout
          transition={transition}
          className="flex flex-row flex-1 items-center space-x-2 text-sm"
          style={{ justifyContent: scrolled ? "flex-end" : "center" }}
        >
          {navLinks.map((link) => (
            <Link to={link.path} key={link.label}>
            <NavLink key={link.label} href={link.href} label={link.label} />
            </Link>
          ))}
        </motion.div>

        {/* Auth Buttons — always exit rightward, always enter from left */}
        <AnimatePresence mode="popLayout">
          {!scrolled && (
            <motion.div
              key="auth-buttons"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex items-center gap-2 shrink-0"
            >
              <a
                href="/login"
                className="px-4 py-2 text-sm font-bold cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-flex items-center justify-center text-black bg-white rounded-[6px] border border-[#E5E5E5] pointer-events-none cursor-not-allowed"
              >
                Login
              </a>
              <a
                href="/signup"
                className="px-4 py-2 text-sm font-bold cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-flex items-center justify-center rounded-[6px] text-white pointer-events-none cursor-not-allowed"
                style={{
                  background: "linear-gradient(181deg, #5E5E5E 18.12%, #000 99.57%)",
                  boxShadow:
                    "0px 4px 8px 0px rgba(3,7,18,0.06), 0px 2px 4px 0px rgba(3,7,18,0.06), 0px 0px 0px 1px rgba(3,7,18,0.08), 0px 1px 1px 2px rgba(255,255,255,0.40) inset, 0px -1px 5px 2px rgba(255,255,255,0.40) inset",
                }}
              >
                Signup
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        initial={false}
        animate={{
          width: scrolled ? "85%" : "90%",
          backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.8)",
          boxShadow: scrolled
            ? "rgba(0,0,0,0.1) 0px 10px 30px -10px"
            : "rgba(0,0,0,0) 0px 0px 0px 0px",
          y: scrolled ? 4 : 0,
        }}
        transition={transition}
        className="flex relative flex-col lg:hidden w-full justify-between items-center max-w-[calc(100vw-2rem)] mx-auto z-50 rounded-2xl"
        style={{ backdropFilter: "blur(16px)", padding: "12px 20px" }}
      >
        <div className="flex flex-row justify-between items-center w-full">
           
         
          <button tabIndex={0} onClick={() => setMobileOpen(!mobileOpen)} className="p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black/90"
            >
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </button>
           <Link to={'/'}>
          <Logo />
          </Link>
          <Link to={'/cartpage'}>
           <CartIcon />
           </Link>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full overflow-hidden"
            >
              <div className="flex flex-col gap-1 pt-3 pb-1">
                {navLinks.map((link,index) => (
                   <Link to={link.path}
                    key={link.label}
                    className={`${index === 4 ? 'hidden' : ''} text-black/90 px-3 py-2 rounded-lg hover:bg-black/5 transition-colors text-sm`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex gap-2 mt-2">
                  {/* <a
                    href="/login"
                    className="flex-1 px-4 py-2 text-sm font-bold text-center text-black bg-white rounded-[6px] border border-[#E5E5E5]"
                  >
                    Login
                  </a> */}

               
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}