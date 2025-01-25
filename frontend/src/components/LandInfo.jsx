import { Map, Ruler } from "lucide-react"
import { Card } from "./Card"

export function LandInfo() {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">Land Info</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Ruler className="w-5 h-5 text-blue-600" />
          <div>
            <p className="text-sm text-gray-600">Area</p>
            <p className="font-medium">150 Acres</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Map className="w-5 h-5 text-blue-600" />
          <div>
            <p className="text-sm text-gray-600">Soil Type</p>
            <p className="font-medium">Clay Loam</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

