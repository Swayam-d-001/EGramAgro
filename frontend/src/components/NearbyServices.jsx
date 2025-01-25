import { motion } from "framer-motion"
import { Card } from "./Card"
import { Microscope, TreesIcon as Plant, Thermometer, PenToolIcon as Tool } from "lucide-react"

export function NearbyServices() {
  const services = [
    { icon: Microscope, name: "Soil testing", description: "Comprehensive soil analysis" },
    { icon: Plant, name: "Crop testing", description: "Crop health assessment" },
    { icon: Thermometer, name: "Cold storage", description: "Temperature controlled storage" },
    { icon: Tool, name: "Equipment", description: "Farm equipment availability" },
  ]

  return (
    <Card className="bg-gradient-to-br from-green-50 to-green-100">
      <h2 className="text-xl font-semibold text-green-800 mb-4">Nearby Services</h2>
      <div className="grid grid-cols-2 gap-4">
        {services.map((service) => (
          <motion.div
            key={service.name}
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <service.icon className="w-6 h-6 text-green-600 mb-2" />
            <h3 className="font-medium text-gray-800">{service.name}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </Card>
  )
}

