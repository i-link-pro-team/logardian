/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types*/
import { LogMethodOptions } from './interfaces/log-method-options.interface'
import { LoggerConfig } from './interfaces/logger-options.interface'
import { Logger } from './logger'

export class Logardian {
    private static _instance: Logger

    private get _instance(): Logger {
        if (!Logardian._instance) {
            Logardian._instance = new Logger()
        }

        return Logardian._instance
    }

    configure(config: LoggerConfig): void {
        if (Object.keys(config).length === 0) {
            return
        }

        this._instance._config = config
    }

    log(message: any, options?: LogMethodOptions): void
    log(message: any, ...optionalParams: [...any, string?]): void
    log(message: any, ...optionalParams: any[]): void {
        this._instance.log(message, ...optionalParams)
    }

    error(message: any, options?: LogMethodOptions): void
    error(message: any, ...optionalParams: [...any, string?, string?]): void
    error(message: any, ...optionalParams: any[]): void {
        this._instance.error(message, ...optionalParams)
    }

    warn(message: any, options?: LogMethodOptions): void
    warn(message: any, ...optionalParams: [...any, string?]): void
    warn(message: any, ...optionalParams: any[]): void {
        this._instance.warn(message, ...optionalParams)
    }

    debug(message: any, options?: LogMethodOptions): void
    debug(message: any, ...optionalParams: [...any, string?]): void
    debug(message: any, ...optionalParams: any[]): void {
        this._instance.debug(message, ...optionalParams)
    }

    verbose(message: any, options?: LogMethodOptions): void
    verbose(message: any, ...optionalParams: [...any, string?]): void
    verbose(message: any, ...optionalParams: any[]): void {
        this._instance.verbose(message, ...optionalParams)
    }

    /**
     * Set a marker for time calculation
     *
     * @param marker Marker name
     */
    markTime(marker: string): void {
        this._instance.markTime(marker)
    }

    /**
     * Measure time that was marked by `markTime()`. Provide message if you want to log your time
     *
     * Example:
     * ```ts
     * logger.markTime('marker')
     *
     * // will return time result
     * const time = logger.measureTime('marker')
     *
     * // will log message in the console and return time result
     * logger.measureTime('marker', 'Function took {n} to be executed', { label: 'auth' })
     * ```
     *
     * @param marker marker name
     * @param message use {n} to paste time result
     * @param options logger options
     *
     * @returns timer result in milliseconds
     */
    measureTime(
        marker: string,
        message?: string,
        options?: LogMethodOptions,
    ): number {
        return this._instance.measureTime(marker, message, options)
    }

    /**
     * Create your specific trace id for each stream
     *
     * @param traceId any string value
     */
    createTraceId(traceId: string): void {
        return this._instance.createTraceId(traceId)
    }
}
