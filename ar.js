i18n.map('ar', {
  global: {
    save: 'حفظ',
    create: 'أحدث',
    logout: 'تسجيل خروج',
    back: 'وراء',
    cancel: 'إلغاء',
    delete: 'حذف',
    confirm: 'ثبت',
    choose: 'اختار',
    noPermission: 'لا يوجد لديك الأذونات',
    passwordNotMatch: 'كلمات السر غير متطابقة',
    optional: 'اختياري'
  },
  accounts: {
    schema: {
      emails: {
        title: 'البريد الإلكتروني',
        address: 'عنوان',
        verified: 'مؤكد'
      },
      password: {
        title: 'كلمة السر',
        new: 'كلمة المرور الجديدة',
        confirm: 'تأكيد كلمة السرd'
      },
      profile: {
        name: 'اسم'
      }
    },
    index: {
      title: 'الحسابات',
      actions: {
        edit: 'تحرير',
      },
      tableTitles: {
        name: 'اسم',
        email: 'البريد الإلكتروني',
        roles: 'الأدوار',
        actions: 'تطبيقات'
      }
    },
    update: {
      title: 'تحديث الحساب',
      messages: {
        noPermissions: 'لا يوجد لديك الأذونات لتعديل هذا المستخدم'
      },
      sections: {
        profile: {
          title: 'الملف الشخصي'
        },
        roles: {
          title: 'الأدوار',
          selectRoles: 'حدد أدوار المستخدم'
        },
        changePassword: {
          title: 'تغيير كلمة المرور'
        },
        deleteUser: {
          title: 'خطر قادم',
          advice: 'حدف المستخدمين يمكن أن يسبب مشاكل',
          button: 'حذف المستخدم'
        }
      }
    },
    myAccount: {
      title: 'حسابي',
    },
    create: {
      title: 'إنشاء مستخدم',
      createInvitation: 'إنشاء دعوة',
      createUserNow: 'إنشاء مستخدم الآن',
      inviteOther: 'ادعوا اخرين',
      selectRoles: 'إختيار أدوار جديدة للمستخدم',
      email: 'البريد الإلكتروني',
      messages: {
        successfullyCreated: 'تم إنشاء الدعوة بنجاح'
      }
    },
    changePassword: {
      title: 'تغيير كلمة المرور',
    },
    updateProfile: {
      title: 'تحديث الملف',
    },
    register: {
      title: 'تسجيل',
      registerButton: 'تسجيل',
      fields: {
        email: 'البريد الإلكتروني',
        name: 'اسم',
        password: 'كلمة السر',
        confirmPassword: '(كلمات السر (مرة أخرى'
      },
      messages: {
        invalidEmail: 'بريد إلكتروني خاطئ',
        invalidInvitationCode: 'رمز الدعوة غير صالح',
      }
    }
  },
  collections: {
    create: {
      title: '{$1} إنشاء'
    },
    update: {
      title: '{$1} تحديث'
    },
    delete: {
      title: '{$1} حذف',
      confirmQuestion: '? {$1} هل أنت متأكد أنك تريد حذف'
    },
    common: {
      defaultPluralName: 'العناصر',
      defaultSingularName: 'العنصر',
    }
  },
  config: {
    update: {
      title: 'ترتيب',
    }
  },
  dictionary: {
    update: {
      title: 'معجم'
    }
  },
  filesystem: {
    messages: {
      notFound_id: '[{$i}] لم يتم العثور على الملف',
      errorUploading: 'لقد حدث خطاٌ في تحميل الملف',
      errorRemoving: 'لقد حدث خطاٌ في حذف الملف',
    }
  },
  pages: {
    schema: {
      title: 'عنوان',
      url: 'رابط',
    },
    index: {
      title: 'صفحات',
    },
    create: {
      title: 'انشئ صفحة',
      chooseTemplate: 'اختيار قالب'
    },
    update: {
      title: 'تحديث الصفحة',
    },
    delete: {
      title: 'حذف الصفحة',
      confirmQuestion: 'هل أنت متأكد أنك تريد حذف هذه الصفحة؟'
    }
  },
  attributes: {
    users: {
      pluralName: 'المستخدمين',
      singularName: 'مستخدم',
    },
    file: {
      choose: 'اختر ملف',
      noFile: 'لا يوجد ملفات',
    },
    image: {
      choose: 'اختيار صورة'
    },
    images: {
      choose: 'اختيار الصور'
    }
  },
  tabular: {
    search: ': بحث',
    info: 'إدخالات _TOTAL_ من _END_ إلى _START_ عرض',
    infoEmpty: 'عرض 0 إلى 0 من 0 إدخالات',
    lengthMenu: 'إدخالات _MENU_ عرض',
    emptyTable: 'لا توجد بيانات في الجدول',
    paginate: {
      first: 'أولا',
      previous: 'سابق',
      next: 'التالي',
      last: 'آخر'
    }
  }
});