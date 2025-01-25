import { motion } from "framer-motion"
import { NearbyServices } from "../components/NearbyServices"
import { LandInfo } from "../components/LandInfo"
import { TrainingResources } from "../components/TrainingResources"
import { Alerts } from "../components/Alert"
import { staggerChildren } from "../utils/animation"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <motion.div
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div className="lg:col-span-2">
          <NearbyServices />
        </div>
        <div>
          <LandInfo />
        </div>
        <div>
          <TrainingResources />
        </div>
        <div className="lg:col-span-2">
          <Alerts />
        </div>
      </motion.div>
    </div>
  )
}

