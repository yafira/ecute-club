// src/data/cards.ts
export type Card = {
	title: string;
	description: string;
	href: string;
	accent: 'p1' | 'p2' | 'p3' | 'p4' | 'p5';
	icon: string;
};

// HOME: overview (now includes new sections)
export const homeCards: Card[] = [
	// sections / navigation
	{
		title: 'components',
		description: 'identify parts and read their values',
		href: '/guides',
		accent: 'p2',
		icon: 'fa-solid fa-puzzle-piece',
	},
	{
		title: 'circuit symbols',
		description: 'what the squiggles mean',
		href: '/guides/circuit-symbols',
		accent: 'p4',
		icon: 'fa-solid fa-wave-square',
	},
	{
		title: 'build a project',
		description: 'how to plan, prototype & assemble',
		href: '/guides/build',
		accent: 'p1',
		icon: 'fa-solid fa-fire-flame-simple',
	},

	// featured
	{
		title: 'integrated circuits',
		description: 'pins, sockets, datasheets',
		href: '/guides/ics',
		accent: 'p4',
		icon: 'fa-solid fa-microchip',
	},

	{
		title: '555 timer IC',
		description: 'classic timers & fun circuits',
		href: '/guides/555',
		accent: 'p5',
		icon: 'fa-solid fa-hourglass-half',
	},
	{
		title: 'study electronics',
		description: 'how circuits actually work',
		href: '/guides/study',
		accent: 'p3',
		icon: 'fa-solid fa-diagram-project',
	},
	{
		title: 'books',
		description: 'friendly intros & references',
		href: '/guides/books',
		accent: 'p2',
		icon: 'fa-solid fa-book-open',
	},

	// prototyping
	{
		title: 'breadboard',
		description: 'prototype without solder',
		href: '/guides/breadboard',
		accent: 'p5',
		icon: 'fa-solid fa-bread-slice',
	},
	{
		title: 'soldering guide',
		description: 'clean joints, no blobs',
		href: '/guides/soldering',
		accent: 'p1',
		icon: 'fa-solid fa-wand-magic-sparkles',
	},
	{
		title: 'pcb',
		description: 'design & make neat boards',
		href: '/guides/pcb',
		accent: 'p4',
		icon: 'fa-solid fa-microchip',
	},

	// parts
	{
		title: 'leds',
		description: 'blink, dim, and color',
		href: '/guides/leds',
		accent: 'p3',
		icon: 'fa-solid fa-lightbulb',
	},
	{
		title: 'transistors',
		description: 'tiny current magicians',
		href: '/guides/transistors',
		accent: 'p2',
		icon: 'fa-solid fa-plug-circle-bolt',
	},
	{
		title: 'switches',
		description: 'spst, dpdt, click!',
		href: '/guides/switches',
		accent: 'p1',
		icon: 'fa-solid fa-toggle-on',
	},
	{
		title: 'relays',
		description: 'electrically operated switches',
		href: '/guides/relays',
		accent: 'p4',
		icon: 'fa-solid fa-gear',
	},
	{
		title: 'resistors',
		description: 'values & color codes',
		href: '/guides/resistors',
		accent: 'p5',
		icon: 'fa-solid fa-grip-lines',
	},
	{
		title: 'capacitors',
		description: 'store & smooth energy',
		href: '/guides/capacitors',
		accent: 'p3',
		icon: 'fa-solid fa-battery-half',
	},
	{
		title: 'diodes',
		description: 'direction, drop, protection',
		href: '/guides/diodes',
		accent: 'p4',
		icon: 'fa-solid fa-bolt',
	},
	{
		title: 'variable resistors',
		description: 'pots: divider & rheostat',
		href: '/guides/variable-resistors',
		accent: 'p5',
		icon: 'fa-solid fa-sliders',
	},
	{
		title: 'cables & wire',
		description: 'solid vs stranded, gauge',
		href: '/guides/cables',
		accent: 'p2',
		icon: 'fa-solid fa-ethernet',
	},
	{
		title: 'connectors',
		description: 'plugs, sockets, headers',
		href: '/guides/connectors',
		accent: 'p2',
		icon: 'fa-solid fa-link',
	},

	// IC families
	{
		title: '4000 series ICs',
		description: 'cmos logic basics',
		href: '/guides/ic-4000',
		accent: 'p4',
		icon: 'fa-solid fa-border-all',
	},
	{
		title: '74 series ICs',
		description: 'ttl logic basics',
		href: '/guides/ic-7400',
		accent: 'p1',
		icon: 'fa-solid fa-table-cells-large',
	},

	// extras
	{
		title: 'tools',
		description: 'iron, dmm, cutters, calm',
		href: '/guides/tools',
		accent: 'p2',
		icon: 'fa-solid fa-screwdriver-wrench',
	},

	{
		title: 'power basics',
		description: 'batteries, regulators, current',
		href: '/guides/power',
		accent: 'p1',
		icon: 'fa-solid fa-plug',
	},
	{
		title: 'microcontrollers',
		description: 'arduino/esp32, pwm & adc',
		href: '/guides/microcontrollers',
		accent: 'p3',
		icon: 'fa-solid fa-microchip',
	},
	{
		title: 'sensors',
		description: 'light, temp, motion',
		href: '/guides/sensors',
		accent: 'p2',
		icon: 'fa-solid fa-signal',
	},
	{
		title: 'motors & drivers',
		description: 'dc, servo, stepper, h-bridge',
		href: '/guides/motors',
		accent: 'p4',
		icon: 'fa-solid fa-fan',
	},
	{
		title: 'op-amps',
		description: 'buffers, gain, gentle analog',
		href: '/guides/op-amps',
		accent: 'p5',
		icon: 'fa-solid fa-wave-square',
	},
	{
		title: 'comms (uart/i²c/spi)',
		description: 'talk between chips',
		href: '/guides/comms',
		accent: 'p1',
		icon: 'fa-solid fa-network-wired',
	},
	{
		title: 'troubleshooting',
		description: 'dmm flow & quick checks',
		href: '/guides/troubleshooting',
		accent: 'p2',
		icon: 'fa-solid fa-stethoscope',
	},
	{
		title: 'batteries & charging',
		description: 'aa vs li-ion, safety',
		href: '/guides/batteries',
		accent: 'p3',
		icon: 'fa-solid fa-car-battery',
	},
	{
		title: 'rf / wireless',
		description: 'wifi/ble modules & antennas',
		href: '/guides/wireless',
		accent: 'p4',
		icon: 'fa-solid fa-wifi',
	},
	{
		title: 'enclosures & hardware',
		description: 'boxes, standoffs, panels',
		href: '/guides/enclosures',
		accent: 'p5',
		icon: 'fa-solid fa-box',
	},
	{
		title: 'simulate it',
		description: 'try ideas before wiring',
		href: '/guides/simulate',
		accent: 'p2',
		icon: 'fa-solid fa-flask',
	},
	{
		title: 'safety & esd',
		description: 'calm, clean, protected',
		href: '/guides/safety',
		accent: 'p3',
		icon: 'fa-solid fa-shield',
	},
];

// /guides page stays focused on components; keep componentCards as-is
export const componentCards: Card[] = [
	{
		title: 'cables & wire',
		description: 'solid vs stranded, gauge',
		href: '/guides/cables',
		accent: 'p2',
		icon: 'fa-solid fa-ethernet',
	},
	{
		title: 'diodes',
		description: 'direction, drop, protection',
		href: '/guides/diodes',
		accent: 'p4',
		icon: 'fa-solid fa-bolt',
	},
	{
		title: 'variable resistors',
		description: 'pots: divider & rheostat',
		href: '/guides/variable-resistors',
		accent: 'p5',
		icon: 'fa-solid fa-sliders',
	},
	{
		title: 'resistors',
		description: 'values & color codes',
		href: '/guides/resistors',
		accent: 'p5',
		icon: 'fa-solid fa-grip-lines',
	},
	{
		title: 'capacitors',
		description: 'store & smooth energy',
		href: '/guides/capacitors',
		accent: 'p3',
		icon: 'fa-solid fa-battery-half',
	},
	{
		title: 'leds',
		description: 'blink, dim, and color',
		href: '/guides/leds',
		accent: 'p3',
		icon: 'fa-solid fa-lightbulb',
	},
	{
		title: 'switches',
		description: 'spst, dpdt, click!',
		href: '/guides/switches',
		accent: 'p1',
		icon: 'fa-solid fa-toggle-on',
	},
	{
		title: 'relays',
		description: 'electrically operated switches',
		href: '/guides/relays',
		accent: 'p4',
		icon: 'fa-solid fa-gear',
	},
	{
		title: 'transistors',
		description: 'tiny current magicians',
		href: '/guides/transistors',
		accent: 'p2',
		icon: 'fa-solid fa-plug-circle-bolt',
	},
	{
		title: 'connectors',
		description: 'plugs, sockets, headers',
		href: '/guides/connectors',
		accent: 'p2',
		icon: 'fa-solid fa-link',
	},
	{
		title: '555 timer IC',
		description: 'classic timers & fun circuits',
		href: '/guides/555',
		accent: 'p5',
		icon: 'fa-solid fa-hourglass-half',
	},
	{
		title: '4000 series ICs',
		description: 'cmos logic basics',
		href: '/guides/ic-4000',
		accent: 'p4',
		icon: 'fa-solid fa-border-all',
	},
	{
		title: '74 series ICs',
		description: 'ttl logic basics',
		href: '/guides/ic-7400',
		accent: 'p1',
		icon: 'fa-solid fa-table-cells-large',
	},
];
