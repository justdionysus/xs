/*
 * Copyright (c) 2018-2019  Moddable Tech, Inc.
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

#ifndef __XSMAIN__
#define __XSMAIN__

#include "xsPlatform.h"

#include <stdio.h>
#include "qapi_types.h"
#include "qurt_error.h"
#include "qurt_signal.h"

#define kSIG_WAKE_MAIN			0x00000001
#define kSIG_THREAD_CREATED		0x00000002
#define kSIG_SERVICE_DEBUGGER	0x00000004

extern qurt_signal_t gMainSignal;

#endif

