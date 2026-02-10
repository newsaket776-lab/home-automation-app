import { Injectable, signal, computed } from '@angular/core';

export interface Device {
    id: string;
    name: string;
    type: 'light' | 'thermostat' | 'lock' | 'camera' | 'speaker' | 'shutter' | 'water-heater' | 'extraction' | 'tv';
    room: string;
    status: 'on' | 'off' | 'locked' | 'unlocked' | 'recording' | 'idle' | 'playing' | 'open' | 'closed' | 'heating';
    value?: number; // Brightness, temperature, volume
    battery?: number;
    icon?: string; // Optional custom icon override
}

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    // Mock Data matching reference image
    private initialDevices: Device[] = [
        // Living Room
        { id: 'lr-1', name: 'Light 1', type: 'light', room: 'Living Room', status: 'on', value: 80 },
        { id: 'lr-2', name: 'Light 2', type: 'light', room: 'Living Room', status: 'off', value: 0 },
        { id: 'lr-3', name: 'Shutters', type: 'shutter', room: 'Living Room', status: 'open', value: 100 },

        // Kitchen
        { id: 'k-1', name: 'Thermo', type: 'thermostat', room: 'Kitchen', status: 'on', value: 24 },
        { id: 'k-2', name: 'Humidifier', type: 'extraction', room: 'Kitchen', status: 'on' }, // Used extraction for humidifier icon
        { id: 'k-3', name: 'TV', type: 'tv', room: 'Kitchen', status: 'playing' },

        // Bedroom 1
        { id: 'b1-1', name: 'Light 1', type: 'light', room: 'Bedroom 1', status: 'on', value: 60 },
        { id: 'b1-2', name: 'Light 1', type: 'light', room: 'Bedroom 1', status: 'off' }, // Duplicate name in image, kept as is

        // Hallway
        { id: 'h-1', name: 'Light 1', type: 'light', room: 'Hallway', status: 'on', value: 100 },

        // Bathroom
        { id: 'ba-1', name: 'Shower', type: 'water-heater', room: 'Bathroom', status: 'heating', value: 45 },
        { id: 'ba-2', name: 'Extraction', type: 'extraction', room: 'Bathroom', status: 'off' },

        // Bedroom 2
        { id: 'b2-1', name: 'Light 1', type: 'light', room: 'Bedroom 2', status: 'on', value: 40 },
        { id: 'b2-2', name: 'TV', type: 'tv', room: 'Bedroom 2', status: 'off' },
        { id: 'b2-3', name: 'Thermo', type: 'thermostat', room: 'Bedroom 2', status: 'on', value: 22 },
    ];

    // State Signals
    devices = signal<Device[]>(this.initialDevices);

    // Computed Signals
    activeDevicesCount = computed(() =>
        this.devices().filter(d => d.status === 'on' || d.status === 'playing' || d.status === 'open' || d.status === 'heating').length
    );

    getRooms() {
        return ['Living Room', 'Kitchen', 'Bedroom 1', 'Bedroom 2', 'Hallway', 'Bathroom'];
    }

    toggleDevice(id: string) {
        this.devices.update(devices =>
            devices.map(d => {
                if (d.id === id) {
                    switch (d.type) {
                        case 'light':
                        case 'extraction':
                        case 'water-heater':
                            return { ...d, status: d.status === 'on' ? 'off' : 'on' };
                        case 'shutter':
                            return { ...d, status: d.status === 'open' ? 'closed' : 'open' };
                        case 'tv':
                            return { ...d, status: d.status === 'playing' ? 'off' : 'playing' };
                        case 'lock':
                            return { ...d, status: d.status === 'locked' ? 'unlocked' : 'locked' };
                        case 'thermostat':
                            // Thermostats usually don't toggle off single click in this UI, but we can standardise
                            return d;
                        default:
                            return d;
                    }
                }
                return d;
            })
        );
    }

    updateValue(id: string, value: number) {
        this.devices.update(devices =>
            devices.map(d => d.id === id ? { ...d, value } : d)
        );
    }
}
