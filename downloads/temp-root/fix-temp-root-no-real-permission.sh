#!/system/bin/sh
# fix-avf-su.sh — standalone script to fix "su: connect daemon: Connection refused"
# after soft reboot. Replaces the broken AVF su with a wrapper to KernelSU's su.
#
# 修复软重启之后Root权限失效的问题。将AVF su替换为指向KernelSU的su的包装器。
# 此方法仅面向于越狱用户
# @boxiaolanya2008
#
# 原理就是通过将AVF su替换为一个包装器脚本，包装器脚本会调用真正的su（KernelSU的su），从而绕过AVF su的问题。
#
# Usage:
#   sh fix-avf-su.sh          # Apply the fix
#   sh fix-avf-su.sh --check  # Just check current status
#   sh fix-avf-su.sh --restore  # Restore original (post hard reboot)

AVF_SU=/apex/com.android.virt/bin/su
KSU_SU=/system/bin/su

case "${1:-}" in
  --check|-c)
    if [ ! -f "$AVF_SU" ]; then
      echo "AVF su not found (APEX not mounted?)"
      exit 1
    fi
    SIZE=$(wc -c < "$AVF_SU")
    if [ "$SIZE" -gt 1000 ]; then
      echo "AVF su is original ($SIZE bytes) — fix needed"
      exit 1
    else
      head -2 "$AVF_SU" | grep -q '/system/bin/su' && echo "AVF su already fixed" || echo "AVF su is modified but not our wrapper"
    fi
    exit 0
    ;;

  --restore|-r)
    echo "AVF su is on tmpfs — hard reboot restores it automatically."
    echo "If you want to manually restore, reboot the device."
    exit 0
    ;;

  --help|-h)
    echo "Usage: sh fix-avf-su.sh [--check|--restore|--help]"
    echo ""
    echo "Fixes 'su: connect daemon: Connection refused' caused by"
    echo "the Android Virtualization Framework su at $AVF_SU"
    echo "taking priority over the real KernelSU su at $KSU_SU."
    echo ""
    echo "  (no args)  Apply the fix (replace AVF su with wrapper)"
    echo "  --check    Check if fix is needed"
    echo "  --restore  Info about restoring (requires reboot)"
    exit 0
    ;;
esac

# Check root
if [ "$(id -u)" != "0" ]; then
  echo "! Must be run as root"
  exit 1
fi

if [ ! -f "$AVF_SU" ]; then
  echo "! $AVF_SU not found — APEX might not be mounted yet"
  echo "  Try running after system is fully booted"
  exit 1
fi

SIZE=$(wc -c < "$AVF_SU")
if [ "$SIZE" -le 1000 ]; then
  echo "AVF su already fixed or too small ($SIZE bytes), skipping"
  exit 0
fi

echo "#!/system/bin/sh" > "$AVF_SU"
echo 'exec /system/bin/su "$@"' >> "$AVF_SU"
chmod 755 "$AVF_SU"

echo "OK — AVF su replaced with wrapper ($(wc -c < "$AVF_SU") bytes)"
echo "Test: su -c 'echo root'"
