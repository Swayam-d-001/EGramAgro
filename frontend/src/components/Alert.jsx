import { motion } from "framer-motion"
import { AlertTriangle, Droplet, Zap, ShoppingCart } from "lucide-react"
import { Card } from "./Card"

export function Alerts() {
  const alerts = [
    { icon: Droplet, type: "Water Scarcity", message: "Low water levels detected in sector A" },
    { icon: Zap, type: "Electricity", message: "Scheduled maintenance: 2PM-4PM" },
    { icon: ShoppingCart, type: "Market", message: "Price alert: Wheat prices increased by 5%" },
  ]

  return (
    <Card className="bg-gradient-to-br from-red-50 to-red-100">
      <div className="flex items-center space-x-2 mb-4">
        <AlertTriangle className="w-6 h-6 text-red-600" />
        <h2 className="text-xl font-semibold text-red-800">Alerts</h2>
      </div>
      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-3 p-3 bg-white rounded-lg border-l-4 border-red-500"
          >
            <alert.icon className="w-5 h-5 text-red-600" />
            <div>
              <p className="font-medium text-gray-800">{alert.type}</p>
              <p className="text-sm text-gray-600">{alert.message}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  )
}

