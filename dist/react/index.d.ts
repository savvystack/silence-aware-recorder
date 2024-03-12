import { a as SilenceAwareRecorderOptions } from '../SilenceAwareRecorder-44d7cddc.js';

declare const useSilenceAwareRecorder: (options: SilenceAwareRecorderOptions) => {
    startRecording: () => void;
    stopRecording: () => void;
    setDevice: (newDeviceId: string) => void;
    isRecording: boolean;
    deviceId: string | undefined;
    getAvailableDevices: () => Promise<MediaDeviceInfo[] | undefined>;
};

export { useSilenceAwareRecorder as default };
