document.querySelector('select[name=night]').addEventListener('change', (e) => {
    const v = e.currentTarget.value
    document.querySelector('input[name=total_grn]').value = v
}, false)

