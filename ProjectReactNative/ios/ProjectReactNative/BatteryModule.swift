@objc(Battery)
class Battery: NSObject {
  @objc
  func getBatteryLevel(_ resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) {
    UIDevice.current.isBatteryMonitoringEnabled = true
    let level = UIDevice.current.batteryLevel * 100
    resolve(Int(level))
  }
}
