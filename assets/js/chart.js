document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('barchart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
      datasets: [
        {
          label: 'Kategori 1',
          data: [12, 19, 3, 5, 2, 3, 7, 8, 6, 10, 12, 15],
          backgroundColor: 'rgba(22, 79, 99, 0.2)',
          borderColor: 'rgba(22, 79, 99, 1)',
          borderWidth: 1
        },
        {
          label: 'Kategori 2',
          data: [7, 11, 5, 8, 3, 7, 10, 6, 9, 12, 14, 9],
          backgroundColor: 'rgba(60, 186, 159, 0.2)',
          borderColor: 'rgba(60, 186, 159, 1)',
          borderWidth: 1
        },
        {
          label: 'Kategori 3',
          data: [5, 6, 9, 10, 4, 8, 11, 3, 5, 7, 11, 13],
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1
        },
        {
          label: 'Kategori 4',
          data: [10, 13, 4, 7, 9, 5, 8, 12, 11, 6, 8, 10],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});


