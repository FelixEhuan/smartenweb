import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.scss']
})
export class ConsumoComponent  {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

   data_json = {
    '-LVn_Uv-AYg3HZdctdLm': {
      'hora': '0:5:14',
      'value': 249
    },
    '-LVn_V9QGShIYIB51HXk': {
      'hora': '0:10:14',
      'value': 1455
    },
    '-LVn_VP8A-d9-L4ioF9m': {
      'hora': '0:15:14',
      'value': 373
    },
    '-LVn_VdtVtnEOs5TmhLC': {
      'hora': '0:20:14',
      'value': 1565
    },
    '-LVn_VtcXK10OgZH3PtB': {
      'hora': '0:25:14',
      'value': 1133
    },
    '-LVn_W8MIPBR8X39yxlw': {
      'hora': '0:30:14',
      'value': 1419
    },
    '-LVn_WO3GxgtyvCekgHi': {
      'hora': '0:35:14',
      'value': 430
    },
    '-LVn_WcqLgY54YQRI1hZ': {
      'hora': '0:40:14',
      'value': 195
    },
    '-LVn_WsdznBJd66Oa--N': {
      'hora': '0:45:14',
      'value': 240
    },
    '-LVn_X7LA_2et6g7i5qK': {
      'hora': '0:50:14',
      'value': 1480
    },
    '-LVn_XN4TTwC12eWBxPI': {
      'hora': '0:55:14',
      'value': 1537
    },
    '-LVn_XboVItJHH8QRazM': {
      'hora': '1:0:14',
      'value': 1589
    },
    '-LVn_XrYu2ZdA0asrFAf': {
      'hora': '1:5:14',
      'value': 278
    },
    '-LVn_Y6HkxDk0falrDg1': {
      'hora': '1:10:14',
      'value': 1543
    },
    '-LVn_YM0A1b_gwBIhwjg': {
      'hora': '1:15:14',
      'value': 240
    },
    '-LVn_YaiSM_cKtC699vO': {
      'hora': '1:20:14',
      'value': 341
    },
    '-LVn_YqSiJ9iO_rsr11P': {
      'hora': '1:25:14',
      'value': 1110
    },
    '-LVn_Z5BU-MIh5MJ2WFy': {
      'hora': '1:30:14',
      'value': 58
    },
    '-LVn_ZKx4daO_ZoXhjcl': {
      'hora': '1:35:14',
      'value': 185
    },
    '-LVn_Z_bWcL5XTmxLnbc': {
      'hora': '1:40:14',
      'value': 1318
    },
    '-LVn_ZpOA_VnpS6UkM5H': {
      'hora': '1:45:14',
      'value': 350
    },
    '-LVn_45WLF4ufwccGlp': {
      'hora': '1:50:14',
      'value': 1528
    },
    '-LVnJnRiXE4_g-85jh': {
      'hora': '1:55:14',
      'value': 1580
    },
    '-LVnZXUE3c_stAujlZ': {
      'hora': '2:0:14',
      'value': 387
    },
    '-LVnoDNrheja2tHeZy': {
      'hora': '2:5:14',
      'value': 148
    },
    '-LVn_a2tYMDZxcoZwogp': {
      'hora': '2:10:14',
      'value': 386
    },
    '-LVn_aIe6c6WTwEzStEO': {
      'hora': '2:15:14',
      'value': 205
    },
    '-LVn_aYNoIm2P95r887b': {
      'hora': '2:20:14',
      'value': 473
    },
    '-LVn_an7SPWF_3mPqpzZ': {
      'hora': '2:25:14',
      'value': 532
    },
    '-LVn_b1oSbtt_Urc6mXG': {
      'hora': '2:30:14',
      'value': 135
    },
    '-LVn_bHTIHSe917mSHsa': {
      'hora': '2:35:14',
      'value': 509
    },
    '-LVn_bXBHvB-PvdWDUyf': {
      'hora': '2:40:14',
      'value': 330
    },
    '-LVn_blwAqXbrAqDU7OY': {
      'hora': '2:45:14',
      'value': 212
    },
    '-LVn_c0c9AOrn5S-7hd4': {
      'hora': '2:50:14',
      'value': 538
    },
    '-LVn_cGOtHzfzdr3Eycv': {
      'hora': '2:55:14',
      'value': 389
    },
    '-LVn_cW4Y6yoYMN1-OEk': {
      'hora': '3:0:14',
      'value': 52
    },
    '-LVn_ckkiaG1wivtqGEH': {
      'hora': '3:5:14',
      'value': 317
    },
    '-LVn_d-PRfmfGpYmd_gB': {
      'hora': '3:10:14',
      'value': 139
    },
    '-LVn_dF42EtON7FLX3z5': {
      'hora': '3:15:14',
      'value': 197
    },
    '-LVn_dUkqjgr1dkPjUjf': {
      'hora': '3:20:14',
      'value': 424
    },
    '-LVn_djPOAe3-eCPU0rm': {
      'hora': '3:25:14',
      'value': 296
    },
    '-LVn_dz4yUFjXhQlhkfj': {
      'hora': '3:30:14',
      'value': 58
    },
    '-LVn_eDkhPGit_2A_lMH': {
      'hora': '3:35:14',
      'value': 196
    },
    '-LVn_eTVVy5L4c0bVvau': {
      'hora': '3:40:14',
      'value': 69
    },
    '-LVn_eiDo5YzybP8Hs-s': {
      'hora': '3:45:14',
      'value': 237
    },
    '-LVn_exs0OS93O-H_nni': {
      'hora': '3:50:14',
      'value': 351
    },
    '-LVn_fCXkofN3DVCX4xK': {
      'hora': '3:55:14',
      'value': 63
    },
    '-LVn_fSL7Y8ByN5UVrXy': {
      'hora': '4:0:14',
      'value': 432
    },
    '-LVn_fh0DU7lFz4qXK0o': {
      'hora': '4:5:14',
      'value': 240
    },
    '-LVn_fwf1z-2kxZz6E7Y': {
      'hora': '4:10:14',
      'value': 290
    },
    '-LVn_gBLrIFpY7zJa9Yc': {
      'hora': '4:15:14',
      'value': 400
    },
    '-LVn_gR0eBTGeXKdhNzE': {
      'hora': '4:20:14',
      'value': 379
    },
    '-LVn_gffIQYoEhB5-GWa': {
      'hora': '4:25:14',
      'value': 206
    },
    '-LVn_gvRfcuOjqgnDYdW': {
      'hora': '4:30:14',
      'value': 174
    },
    '-LVn_hA8_wjvZLHXMwVG': {
      'hora': '4:35:14',
      'value': 85
    },
    '-LVn_hPw_ar1jxUk0der': {
      'hora': '4:40:14',
      'value': 297
    },
    '-LVn_hebilLoN0nK6XTM': {
      'hora': '4:45:14',
      'value': 172
    },
    '-LVn_huHDZiSrVu0jmcB': {
      'hora': '4:50:14',
      'value': 299
    },
    '-LVn_i91Brvc_d6uDT1Z': {
      'hora': '4:55:14',
      'value': 178
    },
    '-LVn_iOkoYyLJD2yelrK': {
      'hora': '5:0:14',
      'value': 295
    },
    '-LVn_idUSKw3c6lSt2Jg': {
      'hora': '5:5:14',
      'value': 359
    },
    '-LVn_itCpBV9wl8AuQXd': {
      'hora': '5:10:14',
      'value': 511
    },
    '-LVn_j7x9pr1_7OnpisX': {
      'hora': '5:15:14',
      'value': 420
    },
    '-LVn_jNe1y0QCJdzmhYR': {
      'hora': '5:20:14',
      'value': 494
    },
    '-LVn_jcKZPmK1qyPRSuU': {
      'hora': '5:25:14',
      'value': 548
    },
    '-LVn_js-TeamYEsU4M_9': {
      'hora': '5:30:14',
      'value': 513
    },
    '-LVn_k6mUfSE8fUwVvQo': {
      'hora': '5:35:14',
      'value': 325
    },
    '-LVn_kMahAjRkGC8UM3w': {
      'hora': '5:40:14',
      'value': 81
    },
    '-LVn_kbGSntGMWkE5HKU': {
      'hora': '5:45:14',
      'value': 516
    },
    '-LVn_kqwYPreSyTkqJo2': {
      'hora': '5:50:14',
      'value': 145
    },
    '-LVn_l5bQeMaITLoa1zK': {
      'hora': '5:55:14',
      'value': 528
    },
    '-LVn_lLG30I4UgHKJUQn': {
      'hora': '6:0:14',
      'value': 485
    },
    '-LVn_l_w9t5IFqM_xNv9': {
      'hora': '6:5:14',
      'value': 443
    },
    '-LVn_lpb8D5rNxnO7qcy': {
      'hora': '6:10:14',
      'value': 440
    },
    '-LVn_m4HIE64VEiulEuU': {
      'hora': '6:15:14',
      'value': 371
    },
    '-LVn_mJx_QJmEYCzBjyD': {
      'hora': '6:20:14',
      'value': 320
    },
    '-LVn_mZdx3z9rD_Utu1m': {
      'hora': '6:25:14',
      'value': 477
    },
    '-LVn_moL5Tqw_ZcDzm3I': {
      'hora': '6:30:14',
      'value': 561
    },
    '-LVn_n33j5XmjgFviRSH': {
      'hora': '6:35:14',
      'value': 159
    },
    '-LVn_nIqj7BV5DGPTPxb': {
      'hora': '6:40:14',
      'value': 232
    },
    '-LVn_nYWhon9HyMPif0f': {
      'hora': '6:45:14',
      'value': 142
    },
    '-LVn_nnFzMP72pH0N7dD': {
      'hora': '6:50:14',
      'value': 139
    },
    '-LVn_o1tvaOFKK6-790w': {
      'hora': '6:55:14',
      'value': 295
    },
    '-LVn_oHZyvT5fHfpwR-0': {
      'hora': '7:0:14',
      'value': 114
    },
    '-LVn_oXCp5qZ_kRvP9w-': {
      'hora': '7:5:14',
      'value': 300
    },
    '-LVn_olvr8IDtZFqLER8': {
      'hora': '7:10:14',
      'value': 547
    },
    '-LVn_p0f_Ixgce_rknm4': {
      'hora': '7:15:14',
      'value': 314
    },
    '-LVn_pGLD6auRkqXhOZ7': {
      'hora': '7:20:14',
      'value': 364
    },
    '-LVn_pW-plYbB9_eBPEc': {
      'hora': '7:25:14',
      'value': 484
    },
    '-LVn_pkgTjwH1_bvU0gC': {
      'hora': '7:30:14',
      'value': 230
    },
    '-LVn_q-N4f91kiyxVTpY': {
      'hora': '7:35:14',
      'value': 273
    },
    '-LVn_qF6lkbSxBXzC65l': {
      'hora': '7:40:14',
      'value': 237
    },
    '-LVn_qUoKkBIE9Ne0iKQ': {
      'hora': '7:45:14',
      'value': 274
    },
    '-LVn_qjTF7o58eAk9mBu': {
      'hora': '7:50:14',
      'value': 412
    },
    '-LVn_qz8B1BOv6Z6xcTY': {
      'hora': '7:55:14',
      'value': 362
    },
    '-LVn_rDoPqvHyHzIj_pV': {
      'hora': '8:0:14',
      'value': 276
    },
    '-LVn_rTUBttskzKQy8nQ': {
      'hora': '8:5:14',
      'value': 296
    },
    '-LVn_ri8sUwWfiwXbphL': {
      'hora': '8:10:14',
      'value': 53
    },
    '-LVn_rxo9-ijVJO0mRvO': {
      'hora': '8:15:14',
      'value': 94
    },
    '-LVn_sCUpakbK6MQ0k-n': {
      'hora': '8:20:14',
      'value': 83
    },
    '-LVn_sS86f-QpGcPOih': {
      'hora': '8:25:14',
      'value': 199
    },
    '-LVn_sgoIIylNTSNbaji': {
      'hora': '8:30:14',
      'value': 335
    },
    '-LVn_swU7Kg2egaOEcZ5': {
      'hora': '8:35:14',
      'value': 252
    },
    '-LVn_tB9Nb8xk6ErfhXr': {
      'hora': '8:40:14',
      'value': 500
    },
    '-LVn_tQoptxr_qD0WBVT': {
      'hora': '8:45:14',
      'value': 38
    },
    '-LVn_tfUOUhEIvsSUxwx': {
      'hora': '8:50:14',
      'value': 494
    },
    '-LVn_tv9AHsqU3dDiWUB': {
      'hora': '8:55:14',
      'value': 453
    },
    '-LVn_u9oDXAn4-Y3btrO': {
      'hora': '9:0:14',
      'value': 458
    },
    '-LVn_uPUcscsZs3sxNWI': {
      'hora': '9:5:14',
      'value': 308
    },
    '-LVn_ue9hmv0EUV3N1Ut': {
      'hora': '9:10:14',
      'value': 151
    },
    '-LVn_uttTTR-O_318RB0': {
      'hora': '9:15:14',
      'value': 189
    },
    '-LVn_v8bKFNF6MJn27Qd': {
      'hora': '9:20:14',
      'value': 507
    },
    '-LVn_vOH9OABDoUILY51': {
      'hora': '9:25:14',
      'value': 375
    },
    '-LVn_vcxn-fMxCFHvKX-': {
      'hora': '9:30:14',
      'value': 196
    },
    '-LVn_vsbXSxHAEXaLXcm': {
      'hora': '9:35:14',
      'value': 476
    },
    '-LVn_w7MQoF0dm0scMaM': {
      'hora': '9:40:14',
      'value': 429
    },
    '-LVn_wN3F6h-oBJOzc0U': {
      'hora': '9:45:14',
      'value': 307
    },
    '-LVn_wblK3RYDYdGJ9VN': {
      'hora': '9:50:14',
      'value': 452
    },
    '-LVn_wrQE75-ahGaXwrM': {
      'hora': '9:55:14',
      'value': 69
    },
    '-LVn_x64aDCg-5dZI6_2': {
      'hora': '10:0:14',
      'value': 292
    },
    '-LVn_xLp8ZgC6XwIfU_5': {
      'hora': '10:5:14',
      'value': 316
    },
    '-LVn_xaUSWTwnhKLgk7p': {
      'hora': '10:10:14',
      'value': 199
    },
    '-LVn_xqCEQH52ug0a4rP': {
      'hora': '10:15:14',
      'value': 494
    },
    '-LVn_y4sAS5TrP4R5YBu': {
      'hora': '10:20:14',
      'value': 427
    },
    '-LVn_yKaN7tE3NKsKcX_': {
      'hora': '10:25:14',
      'value': 480
    },
    '-LVn_y_KwkJ4dANl0h5X': {
      'hora': '10:30:14',
      'value': 119
    },
    '-LVn_yp4risD3t3Krexe': {
      'hora': '10:35:14',
      'value': 438
    },
    '-LVn_z3izW0Osn3Bd-ir': {
      'hora': '10:40:14',
      'value': 34
    },
    '-LVn_zJPWgbsTLuDHevb': {
      'hora': '10:45:14',
      'value': 234
    },
    '-LVn_zZ3snn8nCTjLrLb': {
      'hora': '10:50:14',
      'value': 212
    },
    '-LVn_znkkB8DwtdpF48d': {
      'hora': '10:55:14',
      'value': 489
    },
    '-LVna-2Wrnqfg-dTF0Iz': {
      'hora': '11:0:14',
      'value': 205
    },
    '-LVna-IKVkNDOZVNPQSI': {
      'hora': '11:5:14',
      'value': 230
    },
    '-LVna-Y4YV20Fq07jl9y': {
      'hora': '11:10:14',
      'value': 352
    },
    '-LVna-mkTvn14R5SD2q5': {
      'hora': '11:15:14',
      'value': 111
    },
    '-LVna01Qm_DALG5n4SbA': {
      'hora': '11:20:14',
      'value': 453
    },
    '-LVna0H4iyqmJOEPyKhv': {
      'hora': '11:25:14',
      'value': 269
    },
    '-LVna0WlqzqfOfLBLGVb': {
      'hora': '11:30:14',
      'value': 70
    },
    '-LVna0lQVCn-pMvA2WaR': {
      'hora': '11:35:14',
      'value': 447
    },
    '-LVna105Hh4foY_isP9G': {
      'hora': '11:40:14',
      'value': 113
    },
    '-LVna1Fq0BQadX6o6VLE': {
      'hora': '11:45:14',
      'value': 254
    },
    '-LVna1VX37AgKQtTi1gQ': {
      'hora': '11:50:14',
      'value': 418
    },
    '-LVna1kCf4tePamcndQO': {
      'hora': '11:55:14',
      'value': 338
    },
    '-LVna1zrYCrJaDdpaPbb': {
      'hora': '12:0:14',
      'value': 251
    },
    '-LVna2EXs5kt-yPCQZ2T': {
      'hora': '12:5:14',
      'value': 141
    },
    '-LVna2UFoggyCdoZymSo': {
      'hora': '12:10:14',
      'value': 388
    },
    '-LVna2itvtvtHMvG4_Ex': {
      'hora': '12:15:14',
      'value': 376
    },
    '-LVna2yY4Rj0SyXaq_me': {
      'hora': '12:20:14',
      'value': 66
    },
    '-LVna3DDykwV7dQKDFyV': {
      'hora': '12:25:14',
      'value': 219
    },
    '-LVna3StgfuL8mPsj8we': {
      'hora': '12:30:14',
      'value': 258
    },
    '-LVna3hYh5jdO46tunpC': {
      'hora': '12:35:14',
      'value': 56
    },
    '-LVna3xFTSqPNoZhp9fa': {
      'hora': '12:40:14',
      'value': 152
    },
    '-LVna4BuxoCjYmRayF_t': {
      'hora': '12:45:14',
      'value': 429
    },
    '-LVna4Ra_SJEseiadHJG': {
      'hora': '12:50:14',
      'value': 77
    },
    '-LVna4gJYViIdpWK5YCS': {
      'hora': '12:55:14',
      'value': 448
    },
    '-LVna4w1BaUcEarBJRVS': {
      'hora': '13:0:14',
      'value': 166
    },
    '-LVna5AnJ5lLP8a5BnWx': {
      'hora': '13:5:14',
      'value': 434
    },
    '-LVna5QT04LesSimXoqg': {
      'hora': '13:10:14',
      'value': 511
    },
    '-LVna5f8D2UexpLJ1Ris': {
      'hora': '13:15:14',
      'value': 140
    },
    '-LVna5uooKvL0-TjZQHI': {
      'hora': '13:20:14',
      'value': 77
    },
    '-LVna69UGuWrOwGfol00': {
      'hora': '13:25:14',
      'value': 379
    },
    '-LVna6P9y_lAZEjGnynP': {
      'hora': '13:30:14',
      'value': 200
    },
    '-LVna6dpoc50mSXrMrfI': {
      'hora': '13:35:14',
      'value': 327
    },
    '-LVna6tVAZ3TJFUnKR6S': {
      'hora': '13:40:14',
      'value': 285
    },
    '-LVna7891KGfN-MzUV0W': {
      'hora': '13:45:14',
      'value': 412
    },
    '-LVna7NpFQaGKR4GoVp9': {
      'hora': '13:50:14',
      'value': 489
    },
    '-LVna7cVhuG0I6rkc20r': {
      'hora': '13:55:14',
      'value': 188
    },
    '-LVna7sErhcr0IO6fjsg': {
      'hora': '14:0:14',
      'value': 567
    },
    '-LVna86xNxNl1zZxvyFU': {
      'hora': '14:5:14',
      'value': 640
    },
    '-LVna8Mc8hMmpHA1O5yk': {
      'hora': '14:10:14',
      'value': 704
    },
    '-LVna8bOWFrNTw2O9JY4': {
      'hora': '14:15:14',
      'value': 403
    },
    '-LVna8r5KHlxRaTCafRm': {
      'hora': '14:20:14',
      'value': 503
    },
    '-LVna95qWRgG1-nK-hMP': {
      'hora': '14:25:14',
      'value': 688
    },
    '-LVna9LUQ8JW8YoJea04': {
      'hora': '14:30:14',
      'value': 353
    },
    '-LVna9aCSy8Rspb2q8sG': {
      'hora': '14:35:14',
      'value': 450
    },
    '-LVna9ptSS3Bgd6Gp-eC': {
      'hora': '14:40:14',
      'value': 483
    },
    '-LVnaA4bdFGumSgjLeU0': {
      'hora': '14:45:14',
      'value': 424
    },
    '-LVnaAKHjk-rZC-jvG5N': {
      'hora': '14:50:14',
      'value': 408
    },
    '-LVnaAZxogCGTog737KY': {
      'hora': '14:55:14',
      'value': 328
    },
    '-LVnaAofV1ftD5BQNpJf': {
      'hora': '15:0:14',
      'value': 1727
    },
    '-LVnaB3O20cTe330e5KU': {
      'hora': '15:5:14',
      'value': 1594
    },
    '-LVnaBJ8UDTwTjI_jf5A': {
      'hora': '15:10:14',
      'value': 1556
    },
    '-LVnaBYpMfpky4JO5g31': {
      'hora': '15:15:14',
      'value': 1712
    },
    '-LVnaBnUDG1auE9-Juvq': {
      'hora': '15:20:14',
      'value': 244
    },
    '-LVnaC2A8jIbizxFf2Px': {
      'hora': '15:25:14',
      'value': 200
    },
    '-LVnaCHtCrTX40xRx_r0': {
      'hora': '15:30:14',
      'value': 1732
    },
    '-LVnaCXbvar3lxmmt2u9': {
      'hora': '15:35:14',
      'value': 1283
    },
    '-LVnaCmHd74fBKlSTQmI': {
      'hora': '15:40:14',
      'value': 456
    },
    '-LVnaD0v5BIN4LIk1y9H': {
      'hora': '15:45:14',
      'value': 447
    },
    '-LVnaDGbSGD2kUWGpBHK': {
      'hora': '15:50:14',
      'value': 563
    },
    '-LVnaDWHVXFj0OxgFl5n': {
      'hora': '15:55:14',
      'value': 1293
    },
    '-LVnaDkxzscUGvttToqj': {
      'hora': '16:0:14',
      'value': 234
    },
    '-LVnaE-csuAGqS6Py_PG': {
      'hora': '16:5:14',
      'value': 553
    },
    '-LVnaEFIWh3jycaZkerU': {
      'hora': '16:10:14',
      'value': 581
    },
    '-LVnaEUxsEVec98MS3RZ': {
      'hora': '16:15:14',
      'value': 1609
    },
    '-LVnaEjcbaF_Nt-NnWN2': {
      'hora': '16:20:14',
      'value': 1672
    },
    '-LVnaEzIfIFYYY6vxxhS': {
      'hora': '16:25:14',
      'value': 1461
    },
    '-LVnaFE4H8RQ9mnszE2P': {
      'hora': '16:30:14',
      'value': 1340
    },
    '-LVnaFTlkPvVXXT7-nLm': {
      'hora': '16:35:14',
      'value': 1374
    },
    '-LVnaFiYV8DvNg32BP86': {
      'hora': '16:40:14',
      'value': 403
    },
    '-LVnaFyKGcjg7le22T5i': {
      'hora': '16:45:14',
      'value': 1261
    },
    '-LVnaGD3UD8_a4WWoR1E': {
      'hora': '16:50:14',
      'value': 1434
    },
    '-LVnaGSkCDctgrMXv7gC': {
      'hora': '16:55:14',
      'value': 502
    },
    '-LVnaGhTNp3jwQgyK82U': {
      'hora': '17:0:14',
      'value': 1336
    },
    '-LVnaGx97aclKUIgW3VH': {
      'hora': '17:5:14',
      'value': 254
    },
    '-LVnaHBpD6SGIdQBL8u5': {
      'hora': '17:10:14',
      'value': 256
    },
    '-LVnaHRVgf_fhzcJU6cm': {
      'hora': '17:15:14',
      'value': 1496
    },
    '-LVnaHg9D1TZgc79CYQo': {
      'hora': '17:20:14',
      'value': 178
    },
    '-LVnaHvppsw0NTzz882L': {
      'hora': '17:25:14',
      'value': 1356
    },
    '-LVnaIAV95AKKTlQTHe-': {
      'hora': '17:30:14',
      'value': 1363
    },
    '-LVnaIQ9uknrXxPXuIj0': {
      'hora': '17:35:14',
      'value': 207
    },
    '-LVnaIesCooj0ajRrr-7': {
      'hora': '17:40:14',
      'value': 1156
    },
    '-LVnaIuWboStLkEAJVFg': {
      'hora': '17:45:14',
      'value': 1327
    },
    '-LVnaJ9Foe0DmlGPHUCJ': {
      'hora': '17:50:14',
      'value': 394
    },
    '-LVnaJOyfar9n0ZCZJlt': {
      'hora': '17:55:14',
      'value': 410
    },
    '-LVnaJdcRzH2XCMvvwRc': {
      'hora': '18:0:14',
      'value': 300
    },
    '-LVnaJtIb6l1DNHaGcoG': {
      'hora': '18:5:14',
      'value': 312
    },
    '-LVnaK81ef9XnuaqSz17': {
      'hora': '18:10:14',
      'value': 346
    },
    '-LVnaKNgi99JVAr_kvze': {
      'hora': '18:15:14',
      'value': 497
    },
    '-LVnaKcQL_seC357PLUC': {
      'hora': '18:20:14',
      'value': 782
    },
    '-LVnaKs8pg05e42v24MK': {
      'hora': '18:25:14',
      'value': 413
    },
    '-LVnaL6rorlEOBEN87H4': {
      'hora': '18:30:14',
      'value': 614
    },
    '-LVnaLMYSkPG4gfA3qa6': {
      'hora': '18:35:14',
      'value': 508
    },
    '-LVnaLbEsx3cfQLqRkfD': {
      'hora': '18:40:14',
      'value': 498
    },
    '-LVnaLqtn8hOXQF7aumr': {
      'hora': '18:45:14',
      'value': 667
    },
    '-LVnaM5ZkoTbOsUpWBrr': {
      'hora': '18:50:14',
      'value': 551
    },
    '-LVnaMLDGpxKMZRv1462': {
      'hora': '18:55:14',
      'value': 328
    },
    '-LVnaM_tzz-Us__PyG7i': {
      'hora': '19:0:14',
      'value': 331
    },
    '-LVnaMpZyrokOgfH5hDZ': {
      'hora': '19:5:14',
      'value': 420
    },
    '-LVnaN4EpLYBBQE-rPdu': {
      'hora': '19:10:14',
      'value': 399
    },
    '-LVnaNJyuYiHDyQYj8u5': {
      'hora': '19:15:14',
      'value': 631
    },
    '-LVnaNZfurTBi_KCmG5g': {
      'hora': '19:20:14',
      'value': 273
    },
    '-LVnaNoNvjK9zdeubRw8': {
      'hora': '19:25:14',
      'value': 496
    },
    '-LVnaO31Jc2D5YuS0ns9': {
      'hora': '19:30:14',
      'value': 546
    },
    '-LVnaOIjAOREnDBNoXR1': {
      'hora': '19:35:14',
      'value': 477
    },
    '-LVnaOYTRlK-1qhDg-A7': {
      'hora': '19:40:14',
      'value': 624
    },
    '-LVnaOnAO3296PJYY8Wi': {
      'hora': '19:45:14',
      'value': 380
    },
    '-LVnaP1v4fENGopVS2HK': {
      'hora': '19:50:14',
      'value': 282
    },
    '-LVnaPHce9YzcBOo2RE-': {
      'hora': '19:55:14',
      'value': 634
    },
    '-LVnaPXIJ85bQidSZAI7': {
      'hora': '20:0:14',
      'value': 538
    },
    '-LVnaPlyKSgg_0X0kyD6': {
      'hora': '20:5:14',
      'value': 363
    },
    '-LVnaQ0cYoB1wdbCDt7v': {
      'hora': '20:10:14',
      'value': 230
    },
    '-LVnaQGIf2De0XHR2Gk1': {
      'hora': '20:15:14',
      'value': 1350
    },
    '-LVnaQVyVD0fNvarcPta': {
      'hora': '20:20:14',
      'value': 430
    },
    '-LVnaQkdR0f02PxVlvtQ': {
      'hora': '20:25:14',
      'value': 180
    },
    '-LVnaR-ImryZEaIlJ274': {
      'hora': '20:30:14',
      'value': 1467
    },
    '-LVnaREyfWawjFX6j63H': {
      'hora': '20:35:14',
      'value': 563
    },
    '-LVnaRUdUgaSNUPtURFa': {
      'hora': '20:40:14',
      'value': 1227
    },
    '-LVnaRjIzgYTL7YXpPuT': {
      'hora': '20:45:14',
      'value': 474
    },
    '-LVnaRyywDExzCjuxMDy': {
      'hora': '20:50:14',
      'value': 1589
    },
    '-LVnaSDdQGPO2Oc0dZnP': {
      'hora': '20:55:14',
      'value': 161
    },
    '-LVnaSTKsR9tH2reUJ7N': {
      'hora': '21:0:14',
      'value': 175
    },
    '-LVnaShycXtq75mHj5Qf': {
      'hora': '21:5:14',
      'value': 1200
    },
    '-LVnaSxgaucLn2z8HImN': {
      'hora': '21:10:14',
      'value': 311
    },
    '-LVnaTCLKkNNKWeHtgWn': {
      'hora': '21:15:14',
      'value': 1538
    },
    '-LVnaTS5ezbgJXWzmVQF': {
      'hora': '21:20:14',
      'value': 1277
    },
    '-LVnaTgl8VVMpzN998CQ': {
      'hora': '21:25:14',
      'value': 1238
    },
    '-LVnaTwVAAN5Q1ntiQoe': {
      'hora': '21:30:14',
      'value': 1393
    },
    '-LVnaUBEjtBvxAwYz4_k': {
      'hora': '21:35:14',
      'value': 236
    },
    '-LVnaUQuxsWz7B7k4y3b': {
      'hora': '21:40:14',
      'value': 499
    },
    '-LVnaUf_4pHbk6W1yCbU': {
      'hora': '21:45:14',
      'value': 1521
    },
    '-LVnaUvEkUSdomauJWcU': {
      'hora': '21:50:14',
      'value': 139
    },
    '-LVnaV9ukCtZxA91-KwL': {
      'hora': '21:55:14',
      'value': 1242
    },
    '-LVnaVP_3bLYJTsw2VUn': {
      'hora': '22:0:14',
      'value': 1197
    },
    '-LVnaVeEGS3nYahl4jQL': {
      'hora': '22:5:14',
      'value': 156
    },
    '-LVnaVtwzSiuWmOYrsfP': {
      'hora': '22:10:14',
      'value': 1192
    },
    '-LVnaW8_eBYJ_ZvX9i5W': {
      'hora': '22:15:14',
      'value': 1513
    },
    '-LVnaWOECIc18LyVcibk': {
      'hora': '22:20:14',
      'value': 141
    },
    '-LVnaWcuu5CeN9dd4TxA': {
      'hora': '22:25:14',
      'value': 316
    },
    '-LVnaWs_0s9V15bNffy4': {
      'hora': '22:30:14',
      'value': 1171
    },
    '-LVnaX7FaxT5k49tC14R': {
      'hora': '22:35:14',
      'value': 1106
    },
    '-LVnaXMuJMei8hG-pxW5': {
      'hora': '22:40:14',
      'value': 406
    },
    '-LVnaXb_6acDfn8t7jrb': {
      'hora': '22:45:14',
      'value': 1329
    },
    '-LVnaXrEgJKPPX5V6XJW': {
      'hora': '22:50:14',
      'value': 1517
    },
    '-LVnaY5vAQbWDwR40_kK': {
      'hora': '22:55:14',
      'value': 300
    },
    '-LVnaYLdNFIQ5-en3q_Q': {
      'hora': '23:0:14',
      'value': 153
    },
    '-LVnaYaNkJPYNhrpJeda': {
      'hora': '23:5:14',
      'value': 1529
    },
    '-LVnaYq6ldfZ5xNRl-Eq': {
      'hora': '23:10:14',
      'value': 343
    },
    '-LVnaZ4k1T8Cwjze0KGa': {
      'hora': '23:15:14',
      'value': 306
    },
    '-LVnaZKUYd7vKY5lIo7k': {
      'hora': '23:20:14',
      'value': 57
    },
    '-LVnaZ_Bn3xGstj8_bEb': {
      'hora': '23:25:14',
      'value': 257
    },
    '-LVnaZoqOSWG3OavB2Lo': {
      'hora': '23:30:14',
      'value': 107
    },
    '-LVna_3Z43vVN7pfPUPh': {
      'hora': '23:35:14',
      'value': 1565
    },
    '-LVna_JEosvzwFtkyLzq': {
      'hora': '23:40:14',
      'value': 1142
    },
    '-LVna_Yo5FSTJUfmyuu7': {
      'hora': '23:45:14',
      'value': 1204
    },
    '-LVna_nU5g8xMeps20MA': {
      'hora': '23:50:14',
      'value': 493
    },
    '-LVnaa2ADBMu0U4LDXWN': {
      'hora': '23:55:14',
      'value': 1581
    }
  };
  data_barchart = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
   11.58, 12.43, 12.05, 13.28, 10.85, 10.97, 10.03, 10.54, 10.98, 10.56];
    data_array = [];
    labels_array = [];
  public barChartLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
   '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
   '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Noviembre'},
  ];
  public lineChartData: Array<any> = [
    {
      data: Array,
      label: 'Watts'
    }
  ];
  public lineChartLabels: Array<any>;
  public lineChartOptions = {
    responsive: true
  };
  public lineChartColors = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public potencia = true;
  public lineChartType = 'line';
 constructor() {

this.read_object_data(this.data_json);
this.barChartData[0].data = this.data_barchart;
  this.lineChartLabels = this.labels_array;
  this.lineChartData[0].data = this.data_array;
 }

 public read_object_data(data: any) {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
        // console.log(key + ' -> ' + data[key].value);
        this.data_array.push(data[key].value);
        this.labels_array.push(data[key].hora);
    }
}
console.log(this.data_array);

 }

}
