import React from 'react';
import Link from "next/link";
import { Container, Grid, Divider, Box } from '@mui/material';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaYoutube, FaBitbucket } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#181818', color: '#ffffff', padding: '2rem 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <h2 className="text-xl font-bold mb-4">Sobre Mí</h2>
            <p className="text-zinc-400">
              Me llamo Stevens Cañon, soy estudiante y aspiro a certificarme como desarrollador full-stack. Tengo un gran interés en crecer profesionalmente en la industria del desarrollo de software. Como freelancer, me gustaría especializarme en desarrollo para plataformas Android y web.
            </p>
          </Grid>

          <Grid item xs={12} md={4}>
            <h2 className="text-xl font-bold mb-4">Últimos Proyectos</h2>
            <ul className="space-y-2">
              <li><Link href="https://google.com" className="text-zinc-400 hover:text-white transition-colors">GrandSport's</Link></li>
              <li><Link href="https://google.com" className="text-zinc-400 hover:text-white transition-colors">Simulator Memoria RAM</Link></li>
              <li><Link href="https://google.com" className="text-zinc-400 hover:text-white transition-colors">Register and Login</Link></li>
              <li><Link href="https://google.com" className="text-zinc-400 hover:text-white transition-colors">Sneakers</Link></li>
            </ul>
          </Grid>

          <Grid item xs={12} md={4}>
            <h2 className="text-xl font-bold mb-4">StevensCañon</h2>
            <ul className="space-y-2">
              <li><Link href="/About" className="text-zinc-400 hover:text-white transition-colors">About Me</Link></li>
              <li><Link href="/Contact" className="text-zinc-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="https://www.coursera.org/learn/react-basics" className="text-zinc-400 hover:text-white transition-colors">Learn Programming</Link></li>
              <li><Link href="https://google.com" className="text-zinc-400 hover:text-white transition-colors">Cookies Policy</Link></li>
            </ul>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.1)' }} />

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
          <Link href="https://twitter.com/home" aria-label="Twitter"><FaTwitter className="text-2xl text-zinc-400 hover:text-white transition-colors" /></Link>
          <Link href="https://www.instagram.com/" aria-label="Instagram"><FaInstagram className="text-2xl text-zinc-400 hover:text-white transition-colors" /></Link>
          <Link href="https://github.com/StevensCanon" aria-label="GitHub"><FaGithub className="text-2xl text-zinc-400 hover:text-white transition-colors" /></Link>
          <Link href="https://bitbucket.org/reporsitorio/workspace/repositories/" aria-label="Bitbucket"><FaBitbucket className="text-2xl text-zinc-400 hover:text-white transition-colors" /></Link>
          <Link href="https://www.linkedin.com/in/stevens-ca%C3%B1on-325717325/" aria-label="LinkedIn"><FaLinkedin className="text-2xl text-zinc-400 hover:text-white transition-colors" /></Link>
          <Link href="https://www.youtube.com/?hl=es" aria-label="YouTube"><FaYoutube className="text-2xl text-zinc-400 hover:text-white transition-colors" /></Link>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;