# Magic numbers

![Build Status](https://travis-ci.com/skyandrd/magic_numbers.svg?branch=main)


## Lets check some magic numbers!

For example, if you dont know, 111111111*111111111=12345678987654321 :)

### Some magic numbers from programming languages

[Wikipedia article link](https://en.wikipedia.org/wiki/Magic_number_(programming))

	Description
| Code                   |  Description                                   |
| ---------------------- | --------------------------------------------- |
|00008123|	Used in MS Visual C++. Deleted pointers are set to this value, so they throw an exception, when they are used after; it is a more recognizable alias for the zero address. It is activated with the Security Development Lifecycle (/sdl) option.[20]|
|..FACADE|	"Facade", Used by a number of RTOSes|
|1BADB002|	"1 bad boot", Multiboot header magic number[21]|
|8BADF00D	|"Ate bad food", Indicates that an Apple iOS application has been terminated because a watchdog timeout occurred.[22]|
|A5A5A5A5	|Used in embedded development because the alternating bit pattern (1010 0101) creates an easily recognized pattern on oscilloscopes and logic analyzers.|
|A5	|Used in FreeBSD's PHK malloc(3) for debugging when /etc/malloc.conf is symlinked to "-J" to initialize all newly allocated memory as this value is not a NULL pointer or ASCII NUL character.|
|ABABABAB	|Used by Microsoft's debug HeapAlloc() to mark "no man's land" guard bytes after allocated heap memory.[23]|
|ABADBABE|	"A bad babe", Used by Apple as the "Boot Zero Block" magic number|
|ABBABABE	|"ABBA babe", used by Driver Parallel Lines memory heap.|
|ABADCAFE|	"A bad cafe", Used to initialize all unallocated memory (Mungwall, AmigaOS)|
|B16B00B5	|"Big Boobs", Formerly required by Microsoft's Hyper-V hypervisor to be used by Linux guests as the upper half of their "guest id"[24]|
|BAADF00D	|"Bad food", Used by Microsoft's debug HeapAlloc() to mark uninitialized allocated heap memory[23]|
|BAAAAAAD|	"Baaaaaad", Indicates that the Apple iOS log is a stackshot of the entire system, not a crash report[22]|
|BAD22222|	"Bad too repeatedly", Indicates that an Apple iOS VoIP application has been terminated because it resumed too frequently[22]|
|BADBADBADBAD|	"Bad bad bad bad", Burroughs large systems "uninitialized" memory (48-bit words)|
|BADC0FFEE0DDF00D|	"Bad coffee odd food", Used on IBM RS/6000 64-bit systems to indicate uninitialized CPU registers|
|BADDCAFE|	"Bad cafe", On Sun Microsystems' Solaris, marks uninitialized kernel memory (KMEM_UNINITIALIZED_PATTERN)|
|BBADBEEF|	"Bad beef", Used in WebKit[clarification needed]|
|BEEFCACE|	"Beef cake", Used by Microsoft .NET as a magic number in resource files|
|C00010FF|	"Cool off", Indicates Apple iOS app was killed by the operating system in response to a thermal event[22]|
|CAFEBABE|	"Cafe babe", Used by Java for class files|
|CAFED00D|	"Cafe dude", Used by Java for their pack200 compression|
|CAFEFEED|	"Cafe feed", Used by Sun Microsystems' Solaris debugging kernel to mark kmemfree() memory|
|CCCCCCCC|	Used by Microsoft's C++ debugging runtime library and many DOS environments to mark uninitialized stack memory. CC resembles the opcode of the INT 3 debug breakpoint interrupt on x86 processors.|
|CDCDCDCD|	Used by Microsoft's C/C++ debug malloc() function to mark uninitialized heap memory, usually returned from HeapAlloc()[23]
|0D15EA5E|	"Zero Disease", Used as a flag to indicate regular boot on the Nintendo GameCube and Wii consoles|
|DDDDDDDD|	Used by MicroQuill's SmartHeap and Microsoft's C/C++ debug free() function to mark freed heap memory[23]|
|DEAD10CC|	"Dead lock", Indicates that an Apple iOS application has been terminated because it held on to a system resource while running in the background[22]
|DEADBABE|	"Dead babe", Used at the start of Silicon Graphics' IRIX arena files
|DEADBEEF	|"Dead beef", Famously used on IBM systems such as the RS/6000, also used in the classic Mac OS operating systems, OPENSTEP Enterprise, and the Commodore Amiga. On Sun Microsystems' Solaris, marks freed kernel memory (KMEM_FREE_PATTERN)|
|DEADCAFE	|"Dead cafe", Used by Microsoft .NET as an error number in DLLs|
|DEADC0DE	|"Dead code", Used as a marker in OpenWRT firmware to signify the beginning of the to-be created jffs2 file system at the end of the static firmware|
|DEADFA11|	"Dead fail", Indicates that an Apple iOS application has been force quit by the user[22]|
|DEADF00D|	"Dead food", Used by Mungwall on the Commodore Amiga to mark allocated but uninitialized memory[25]|
|DEFEC8ED|	"Defecated", Used for OpenSolaris core dumps|
|DEADDEAD|	"Dead Dead" indicates that the user deliberately initiated a crash dump from either the kernel debugger or the keyboard.[26]|
|EBEBEBEB|	From MicroQuill's SmartHeap|
|FADEDEAD|	"Fade dead", Comes at the end to identify every AppleScript script|
|FDFDFDFD|	Used by Microsoft's C/C++ debug malloc() function to mark "no man's land" guard bytes before and after allocated heap memory,[23] and some debug Secure C-Runtime functions implemented by Microsoft (e.g. strncat_s) [27]|
|FEE1DEAD	|"Feel dead", Used by Linux reboot() syscall|
|FEEDFACE	|"Feed face", Seen in PowerPC Mach-O binaries on Apple Inc.'s macOS platform. On Sun Microsystems' Solaris, marks the red zone (KMEM_REDZONE_PATTERN)Used by VLC player and some IP cameras in RTP/RTCP protocol, VLC player sends four bytes in the order of the endianness of the system. Some IP cameras expect the player to send this magic number and do not start the stream if it is not received.|
|FEEEFEEE|	"Fee fee", Used by Microsoft's debug HeapFree() to mark freed heap memory. Some nearby internal bookkeeping values may have the high word set to FEEE as well.[23]|