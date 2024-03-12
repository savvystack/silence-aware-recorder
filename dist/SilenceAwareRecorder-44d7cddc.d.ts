type OnVolumeChange = (volume: number) => void;
type OnDataAvailable = (data: Blob) => void | undefined;
interface SilenceAwareRecorderOptions {
    deviceId?: string;
    minDecibels?: number;
    onDataAvailable?: OnDataAvailable;
    onVolumeChange?: OnVolumeChange;
    setDeviceId?: (deviceId: string) => void;
    silenceDuration?: number;
    silentThreshold?: number;
}
declare class SilenceAwareRecorder {
    private audioContext;
    private mediaStreamSource;
    private analyser;
    private mediaRecorder;
    private silenceTimeout;
    private readonly silenceThreshold;
    private readonly silenceDuration;
    private readonly minDecibels;
    private readonly onVolumeChange?;
    private readonly onDataAvailable?;
    private isSilence;
    private hasSoundStarted;
    deviceId: string | undefined;
    isRecording: boolean;
    constructor({ onVolumeChange, onDataAvailable, silenceDuration, silentThreshold, minDecibels, deviceId, }: SilenceAwareRecorderOptions);
    startRecording(): Promise<void>;
    private getAudioStream;
    private setupAudioContext;
    private setupMediaRecorder;
    getAvailableDevices(): Promise<MediaDeviceInfo[]>;
    setDevice(deviceId: string): void;
    stopRecording(): void;
    private cleanUp;
    private checkForSilence;
    private computeVolume;
}

export { SilenceAwareRecorder as S, SilenceAwareRecorderOptions as a };
