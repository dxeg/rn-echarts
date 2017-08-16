package com.rnbdecharts;

import android.content.Context;

import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;


/**
 * Created by Administrator on 2016/10/18.
 */
public class RnBdEchartsModule extends ReactContextBaseJavaModule implements LifecycleEventListener {

    private Context context;
    private String TAG = "RnBdEchartsModule";

    public RnBdEchartsModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }


    @Override
    public void onHostResume() {

    }

    @Override
    public void onHostPause() {

    }

    @Override
    public void onHostDestroy() {

    }

    @Override
    public String getName() {
        return TAG;
    }
}
