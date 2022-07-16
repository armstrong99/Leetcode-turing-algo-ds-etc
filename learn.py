#Standard sea lavel conditions
R_atm=287
Re=6378000
To=288.15
rho=1.225
Po=101325
go=9.81

#Gas constant for atmosphere in J/KgK
#Radius of earth in m
#Sea level temperature in K
#Sea level density in kg/cub. m
#Sea level pressure in N/sq. m
#Acceleration due to gravity at surface in m/sq.m

def T(hg): #Function to calculate temperature variati 2 
  if hg <= 11000:
    return To + (-0.0065 * hg)
  elif 11000< hg <= 20000:
    return 216.65
  elif 20000< hg <= 32000:
    return 216.65 + 0.0010*(hg - 20000)
  elif 32000< hg <= 47000:
    return 228.7 + 0.0028*(hg - 32000)
  elif 47000< hg <= 51000:
    return 270.65
  elif 51000< hg <= 79000:
    return 270.65 + (-0.0045*(hg-51000))


def rh(hg):
 if hg <= 11000:
    To = 288.15
    rho = 1.225
    Th = T(hg)
    return rho*(Th/To)**((go/(0.0065*287))-1)

 elif 11000 < hg <= 20000:
    To = 216.65
    rho = 0.364569
    ho = 11000
    return rho*(2.71828)**(go*(ho-hg)/(To*287))

 elif 20000< hg <= 32000:
    To = T(20000)
    rho = 0.08812
    Th = T(hg)
    return rho*(Th/To)**((-go/(0.001*287))-1)
 elif 32000 < hg <= 47000:
    To = T(32000)
    Th = T(hg)
    rho = 0.01355
    ho = 32000
    return rho*(Th/To)**((-go/(0.0028*287))-1)

 elif 47000 < hg <= 51000:
    To = T(47000)
    rho = 0.0012753
    ho = 47000
    return rho*(2.71828)**(go*(ho-hg)/(To*287))

 elif 51000 < hg <= 79000:
    To = T(51000)
    Th = T(hg)
    rho = 0.0009069
    ho = 51000
    return rho*(Th/To)**((go/(0.0045*287))-1)

print(rh(100))