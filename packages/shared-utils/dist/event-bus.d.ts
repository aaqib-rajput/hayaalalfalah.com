export interface Event<T = unknown> {
    type: string;
    payload: T;
    service: string;
    timestamp: string;
}
export declare class EventBus {
    private publisher;
    private subscriber;
    constructor(redisUrl?: string);
    publish<T>(type: string, payload: T, serviceName: string): Promise<void>;
    subscribe<T>(type: string, handler: (event: Event<T>) => void): Promise<void>;
    disconnect(): Promise<void>;
}
//# sourceMappingURL=event-bus.d.ts.map