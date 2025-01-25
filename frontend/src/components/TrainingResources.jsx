import { BookOpen, Wifi, WifiOff } from "lucide-react"
import { Card } from "./Card"

export function TrainingResources() {
  return (
    <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
      <h2 className="text-xl font-semibold text-purple-800 mb-4">Training Resources</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer">
          <Wifi className="w-5 h-5 text-purple-600" />
          <div>
            <p className="font-medium">Online Resources</p>
            <p className="text-sm text-gray-600">Video courses and tutorials</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer">
          <WifiOff className="w-5 h-5 text-purple-600" />
          <div>
            <p className="font-medium">Offline Resources</p>
            <p className="text-sm text-gray-600">Site Visit</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

