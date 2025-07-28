export const isExcelFile = (file: File): boolean => {
    const acceptedTypes = [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-excel',
    ];
    return acceptedTypes.includes(file.type);
};
