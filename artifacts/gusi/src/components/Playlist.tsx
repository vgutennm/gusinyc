import { motion } from "framer-motion";
import { SONGS } from "@/data/songs";
import { MusicPlayer } from "@/components/MusicPlayer";

export function Playlist() {
  return (
    <section id="playlist" className="py-20 md:py-32 bg-gusi-charcoal text-gusi-ivory bg-texture-dark">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-gusi-gold mb-5 md:mb-6">Music Playlist</h2>
          <div className="w-12 h-px bg-gusi-gold mx-auto mb-6" />
          <p className="text-base sm:text-lg leading-relaxed text-gusi-porcelain/70 font-light max-w-xl mx-auto">
            Listen to our featured music. More songs will be added soon.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {SONGS.map((song, idx) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: Math.min(idx, 3) * 0.08 }}
            >
              <MusicPlayer
                songTitle={song.title}
                artistName={song.artist}
                description={song.description}
                audioSrc={song.audioSrc}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
