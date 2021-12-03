/*
 * Copyright (c) 2021  Moddable Tech, Inc.
 *
 *   This file is part of the Moddable SDK Runtime.
 *
 *   The Moddable SDK Runtime is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Lesser General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   The Moddable SDK Runtime is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Lesser General Public License for more details.
 *
 *   You should have received a copy of the GNU Lesser General Public License
 *   along with the Moddable SDK Runtime.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

import Digital from "pins/digital";
import I2C from "pins/i2c";
import SMBus from "pins/smbus";
import Modules from "modules";
import Preference from "preference";
import Resource from "Resource";
import Time from "time";
import Timer from "timer";

globalThis.Digital = Digital;
globalThis.I2C = I2C;
globalThis.Modules = Modules;
globalThis.Preference = Preference;
globalThis.Resource = Resource;
globalThis.SMBus = SMBus;
globalThis.Time = Time;


globalThis.Timer = Timer;
