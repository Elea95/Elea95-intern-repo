package com.yourapp;

import android.content.Intent;
import android.content.IntentFilter;
import android.os.BatteryManager;
import android.os.Build;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class BatteryModule extends ReactContextBaseJavaModule {
  BatteryModule(ReactApplicationContext context) {
    super(context);
  }

  @Override
  public String getName() {
    return "Battery";
  }

  @ReactMethod
  public void getBatteryLevel(Promise promise) {
    IntentFilter iFilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
    Intent batteryStatus = getReactApplicationContext().registerReceiver(null, iFilter);
    int level = batteryStatus != null ? batteryStatus.getIntExtra(BatteryManager.EXTRA_LEVEL, -1) : -1;
    promise.resolve(level);
  }
}
