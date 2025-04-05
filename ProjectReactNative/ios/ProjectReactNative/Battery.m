#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(Battery, NSObject)
RCT_EXTERN_METHOD(getBatteryLevel:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
@end
